export default function Card({title,description,stack,live,link,image,rspan}){
    const btn_style="bg-[#39d353] px-4 py-1 rounded-md text-slate-900 font-semibold hover:bg-transparent border-1 hover:border-[#39d353] hover:text-[#39d353] ease-in-out duration-300"
    return (
        <div className={`relative overflow-clip h-full w-full scale-3d rounded-xl text-white ${rspan && 'col-span-2'} projects`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${image})`}} ></div>
            <div className="absolute inset-0 bg-slate-950 opacity-70 mix-blend-darken"/>
            <div className="px-8 py-6 flex flex-col gap-5 bg-cover relative z-1">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-sm text-slate-100">{description}</p>
                <ul className="flex flex-wrap gap-2">
                    {stack.map((val,idx)=>{
                        return <li className="bg-[#58a6ff] text-black py-1 px-2 rounded-xl text-xs" key={idx}>{val}</li>
                    })}
                </ul>
                <div className="flex gap-4">
                    {live && <a href={live} className={btn_style}>Live Preview</a>}
                    <a href={link} className={btn_style}>Source Code</a>
                </div>
            </div>
        </div>
    )
}