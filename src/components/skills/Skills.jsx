import SkillCard from "./SkillCard"
import skillsarr from "./skillsdata"

export default function Skills({ref,active}){
    let classsec="py-16 flex items-center justify-center slide-in appear"
    let isactive=false;
    if(active==="skills") isactive=true

    return (
    <section className={classsec} ref={ref} id="skills">
        <div className="flex flex-col justify-center items-center w-full md:max-w-4/5 2xl:max-w-2/3">
            <h2 className="text-center text-4xl md:text-5xl font-semibold mb-15 bg-gradient-to-b from-[#39d353] to-[#58a6ff] bg-clip-text text-transparent border-b-4 pb-4 border-[#58a6ff]">My Skills</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 mx-20 md:mx-4 lg:mx-10">
                {skillsarr.map((val,idx)=>
                     <SkillCard {...val} key={idx} isactive={isactive} last={idx===skillsarr.length-1}/>
                )}
            </div>
        </div>
    </section>
    )
}