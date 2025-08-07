import Card from "./Card"
import projects from "./projectsdata"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export default function({ref}){
    const label = useRef()

    useGSAP(() => {
    gsap.from('.projects', {
        scale:0.5,
        opacity:0,
        y:200,
        duration: 0.3,
        stagger: 0.3,
        ease: "power1.inOut",
        scrollTrigger:{
            trigger:'.projects',
            scroller:'body',
            start:"top 90%",
        }
        });

    gsap.from(label.current,{
        opacity:0,
        duration: 0.5,
        scrollTrigger:{
            trigger:label.current,
            scroller:'body',
            start:"top 90%",
        }
    })
    
  });

    return (
    <section className="py-16 flex items-center justify-center" ref={ref} id="projects">
        <div className="flex flex-col justify-center items-center w-full sm:max-w-4/5 2xl:max-w-2/3">
            <h2 className="text-center text-4xl sm:text-5xl font-semibold mb-15 bg-gradient-to-b from-[#39d353] to-[#58a6ff] bg-clip-text text-transparent border-b-4 pb-4 border-[#58a6ff]" ref={label}>My Best Projects</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-16 mx-4 ">
                {projects.map((val,idx)=>{
                    let rspan=false
                    if(idx===0 || idx===3){
                        rspan=true
                    }
                    return <Card key={idx} rspan={rspan} {...val}/>
                })}
            </div>
        </div>
    </section>
    )
}