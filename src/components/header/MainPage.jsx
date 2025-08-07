import { useGSAP } from "@gsap/react";
import gsap from "gsap"

export default function MainPage({projects,contact,ref}){
    const mainclass="bg-gradient-to-b from-[#0d1117] via-[#21262d] to-[#30363d] h-screen w-screen"

    function handleclick(clickon){
        clickon.current.scrollIntoView({behavior:"smooth"});
    }

    useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.header', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    tl.from('.header-btn', {
      opacity: 0,
      duration: 0.2,
    });
  });

    return(
        <div className={`${mainclass} flex flex-col justify-center`} ref={ref} id="home">
            <div className="flex flex-col mx-20 md:mx-40 gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-b from-[#39d353] to-[#58a6ff] font-semibold bg-clip-text text-transparent header">Hello, I'm</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-300 header">Hutansh Sharma</h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-100 header">Software Developer</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 z-1">
                    <button onClick={()=>handleclick(projects)} className="border-1 border-[#58a6ff] py-2 px-4 rounded-lg text-[#58a6ff] hover:bg-[#58a6ff] hover:text-white header-btn inline-block" >View my Work</button>
                    <button onClick={()=>{handleclick(contact)}} className="border-1 border-transparent hover:border-[#58a6ff] hover:bg-transparent py-2 px-4 rounded-lg hover:text-[#58a6ff] bg-[#58a6ff] text-white header-btn">Contact me</button>
                </div>
            </div>
        </div> 
    )
}