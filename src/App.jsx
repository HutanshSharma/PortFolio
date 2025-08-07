import { useRef,useState,useEffect } from "react"

import Navbar from "./components/header/Navbar"
import MainPage from "./components/header/MainPage"
import Canvas from "./components/header/Canvas"
import About from "./components/about/About"
import Education from "./components/education/Display"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Project"
import Footer from "./components/contact_me/Footer"
import MobileNavbar from "./components/header/MobileNavbar"
import Scroll from "./components/scroll/Scroll"

function App() {
  const about = useRef()
  const education = useRef()
  const skills = useRef()
  const projects = useRef()
  const home = useRef()
  const contact = useRef()

  const [activeSection, setActiveSection] = useState("");
  const [width,setwidth] = useState(window.innerWidth)

  useEffect(() => {
  const sections = [
    { id: "home", ref: home },
    { id: "about", ref: about },
    { id: "education", ref: education },
    { id: "skills", ref: skills },
    { id: "projects", ref: projects },
    { id: "contact", ref: contact },
  ];

  function handleScroll() {
    const activationOffset = window.innerHeight/1.2;

    let closestSection = null;
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.min(Math.abs(rect.top),Math.abs(rect.bottom - activationOffset));
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    });

    if (closestSection) {
      setActiveSection(closestSection);
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);

  window.addEventListener("resize",()=>{
    setwidth(window.innerWidth)
  })

  return(
    <>
    <header className="overflow-hidden nunito">
      {width>780 && <Navbar home={home} about={about} education={education} skills={skills} projects={projects} contact={contact} active={activeSection}/>}
      {width<=780 && <MobileNavbar home={home} about={about} education={education} skills={skills} projects={projects} contact={contact} active={activeSection}/>}
      <Canvas/>
      <MainPage ref={home} projects={projects} contact={contact}/>
    </header>
    <main className="min-h-screen w-full bg-gradient-to-tl from-[#0d1117] via-[#21262d] to-[#30363d] nunito">
      <About ref={about} width={width}/>
      <Education ref={education} width={width}/>
      <Skills ref={skills} active={activeSection} width={width}/>
      <Projects ref={projects} />
    </main>
    <footer className="bg-gradient-to-tl from-[#0d1117] via-[#21262d] to-[#30363d] nunito">
      <Scroll />
      <Footer ref={contact}/>
    </footer>
    </>
  )
}

export default App
