import { useGSAP } from "@gsap/react";
import gsap from "gsap"

export default function Navbar({active,home,about,education,skills,projects,contact}){
    const classes="bg-[rgba(13,17,23,0.85)] h-18 w-full fixed top-0 flex gap-16 px-10 items-center text-lg border-b-1 border-[rgba(255,255,255,0.1)] z-2"
    function handleclick(clickon){
        clickon.current.scrollIntoView({behavior:"smooth"});
    }

    useGSAP(()=>{
        gsap.from(".topic",{
            opacity:0,
            y:-20,
            duration:1,
            stagger:0.1
        })
    })

    return(
        <div className={classes}>
            <button onClick={() => handleclick(home)} className={active==="home" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>Home</button>
            <button onClick={() => handleclick(about)} className={active==="about" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>About</button>
            <button onClick={() => handleclick(education)} className={active==="education" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>Education</button>
            <button onClick={() => handleclick(skills)} className={active==="skills" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>Skills</button>
            <button onClick={() => handleclick(projects)} className={active==="projects" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>Projects</button>
            <button onClick={() => handleclick(contact)} className={active==="contact" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent topic"}>Contact</button>
        </div>
    )
}