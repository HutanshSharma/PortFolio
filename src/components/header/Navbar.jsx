export default function Navbar({active,home,about,education,skills,projects,contact}){
    const classes="bg-[rgba(13,17,23,0.85)] h-18 w-full fixed top-0 flex gap-16 px-10 items-center text-lg border-b-1 border-[rgba(255,255,255,0.1)] z-2"
    function handleclick(clickon){
        clickon.current.scrollIntoView({behavior:"smooth"});
    }

    return(
        <div className={classes}>
            <button onClick={() => handleclick(home)} className={active==="home" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>Home</button>
            <button onClick={() => handleclick(about)} className={active==="about" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>About</button>
            <button onClick={() => handleclick(education)} className={active==="education" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>Education</button>
            <button onClick={() => handleclick(skills)} className={active==="skills" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>Skills</button>
            <button onClick={() => handleclick(projects)} className={active==="projects" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>Projects</button>
            <button onClick={() => handleclick(contact)} className={active==="contact" ? "text-[#EDEDED] border-b-2 border-[#39d353]":"text-[#A0A0A0] border-b-2 border-transparent"}>Contact</button>
        </div>
    )
}