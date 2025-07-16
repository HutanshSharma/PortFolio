export default function Box({year,course,place,description,score,direction}){
    return(
        <div className="bg-[rgba(33,38,45,0.8)] border-1 border-[#58a6ff] hover:shadow-[0_0_30px_#58a6ff] transition-all duration-800 px-8 py-4 rounded-xl relative">
            {direction==='right' &&<div className="absolute -left-5 sm:-left-10 md:left-auto md:-right-[4rem] top-1/2 w-5 sm:w-10 md:w-16 h-0.5 bg-gradient-to-b from-[#39d353] to-[#58a6ff]"></div>}
            {direction==='left' &&<div className="absolute -left-5 sm:-left-10 md:-left-16 w-5 sm:w-10 md:w-16 top-1/2 h-0.5 bg-gradient-to-b from-[#39d353] to-[#58a6ff] "></div>}
            <span className="text-white bg-[#58a6ff] px-4 py-2 rounded-sm my-5 inline-block">{year}</span>
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-400 text-2xl font-bold">{course}</h2>
                <h3 className="text-xl text-white">{place}</h3>
                <p className="text-md text-white">{description}</p>
                <p className="text-xl font-semibold text-emerald-200">{score}</p>  
            </div>
        </div>
    )
}