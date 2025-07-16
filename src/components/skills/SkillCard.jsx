export default function SkillCard({title,skills,last,isactive}){
    return(
        <div className="bg-[rgba(33,38,45,0.8)] border-l-4 border-[#58a6ff] hover:shadow-[0_0_30px_#58a6ff] transition-all duration-800 px-8 py-4 rounded-xl text-white text-xl">
            <span className="text-white bg-[#58a6ff] px-4 py-2 rounded-sm my-5 inline-block">{title}</span>
            <ul className="space-y-2.5">
                {skills.map((val,idx)=>{
                    let expertise;
                    if(val[1]>=0 && val[1]<=33) expertise = "beginner"
                    else if(val[1]>33 && val[1]<=67) expertise = "intermediate"
                    else if(val[1]>67 && val[1]<=100) expertise = "advanced"

                    return (
                        <li key={idx} className="flex justify-between items-center">
                            <div className="mr-5">{last ? val:val[0]}</div>
                            {!last && <div className="w-40 h-2 rounded-xl bg-[#ecf0f1]"><div className={`skill-progress rounded-xl ${expertise}`} style={isactive ? {width:`${val[1]}%`}:{width:'0%'}}></div></div>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}