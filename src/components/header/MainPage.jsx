export default function MainPage({projects,contact,ref,active}){
    const mainclass="bg-gradient-to-b from-[#0d1117] via-[#21262d] to-[#30363d] h-screen w-screen"

    function handleclick(clickon){
        clickon.current.scrollIntoView({behavior:"smooth"});
    }

    let slideclass="flex flex-col gap-4 slide-in"

    if(active==="home"){
        slideclass+=" appear"
    }

    return(
        <div className={`${mainclass} flex flex-col justify-center`} ref={ref} id="home">
            <div className="flex flex-col mx-20 md:mx-40 gap-10">
                <div className={slideclass}>
                    <h1 className="text-5xl md:text-6xl bg-gradient-to-b from-[#39d353] to-[#58a6ff] font-semibold bg-clip-text text-transparent">Hello, I'm</h1>
                    <h1 className="text-5xl md:text-6xl font-semibold text-slate-300">Hutansh Sharma</h1>
                    <h2 className="text-2xl md:text-3xl text-stone-100">Software Developer</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 z-1">
                    <button onClick={()=>handleclick(projects)} className="border-1 border-[#58a6ff] py-2 px-4 rounded-lg text-[#58a6ff] hover:bg-[#58a6ff] hover:text-white ease-in-out duration-300">View my Work</button>
                    <button onClick={()=>{handleclick(contact)}} className="border-1 border-transparent hover:border-[#58a6ff] hover:bg-transparent py-2 px-4 rounded-lg hover:text-[#58a6ff] bg-[#58a6ff] text-white ease-in-out duration-300">Contact me</button>
                </div>
            </div>
        </div> 
    )
}