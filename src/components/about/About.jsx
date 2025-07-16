import img from "../../assets/My photo.jpg"
import pdf from "../../assets/Resume/My Resume.pdf"
import Modal from "../Modal"
import { useRef } from "react"

export default function About({ref,active}){
    const modal=useRef()

    function handleclick(){
        modal.current.showModal()
    }

    let classes="bg-[rgba(33,38,45,0.8)] text-base sm:text-lg text-[#f0f6fc] px-4 sm:px-8 py-2 sm:py-4 rounded-lg my-9 fade-in" 

    if(active==="about"){
        classes+=" active"
    }

    return(
        <section className="py-16 flex items-center justify-center" ref={ref} id="about">
            <Modal ref={modal} heading="Success" description="Resume was downloaded successfully"/>
            <div className="flex flex-col justify-center items-center max-w-5/6">
                <span className="text-center text-4xl sm:text-5xl font-semibold mb-15 bg-gradient-to-b from-[#39d353] to-[#58a6ff] bg-clip-text text-transparent border-b-4 pb-4 border-[#58a6ff]">About me</span>
                <div className="flex flex-col md:grid lg:grid-cols-2 gap-10 sm:mx-10">
                    <img src={img} alt="profile photo" className="max-h-[716px] place-self-center rounded-md"/>
                    <div className="place-content-center">
                        <div className="flex gap-6 flex-wrap my-4">
                            <a href="https://github.com/HutanshSharma" className="hover:-translate-y-2 transition-all duration-800"><i className="fa-brands fa-github p-3 rounded-[50%] bg-[#58a6ff] text-lg sm:text-2xl text-center hover:rotate-[360deg] transition-all duration-800"></i></a>
                            <a href="https://leetcode.com/u/HUTANSH_sharma/" className="hover:-translate-y-2 transition-all duration-800"><i className="fa-solid fa-code p-3 rounded-[50%] bg-[#58a6ff] text-lg sm:text-2xl text-center hover:rotate-[360deg] transition-all duration-800"></i></a>
                            <a href="https://www.linkedin.com/in/hutansh-sharma-3757a7320" className="hover:-translate-y-2 transition-all duration-800"><i className="fa-brands fa-linkedin p-3 rounded-[50%] bg-[#58a6ff] text-lg sm:text-2xl text-center hover:rotate-[360deg] transition-all duration-800"></i></a>
                            <a href="mailto:hutanshsharma241005@gmail.com" className="hover:-translate-y-2 transition-all duration-800"><i className="fa-solid fa-envelope p-3 rounded-[50%] bg-[#58a6ff] text-lg sm:text-2xl text-center hover:rotate-[360deg] transition-all duration-800"></i></a>
                        </div>
                        <div className={classes}>
                            <p>I am a second-year Computer Science and Engineering student at the Indian Institute of Technology Jammu. With a strong foundation in programming, data structures, and algorithms, I bring solid problem-solving abilities and a passion for continuous learning. I enjoy exploring new technologies and applying my skills to real-world challenges through hands-on projects and collaborative efforts.</p>
                            <p className="mt-3">I am particularly interested in software development and take pride in building practical and efficient solutions that merge creativity with technical precision. I am eager to contribute to a forward-thinking organization where I can grow both personally and professionally, work alongside experienced professionals, and make meaningful contributions through innovation and dedication.</p>
                        </div>
                        <a href={pdf} download onClick={handleclick} className="pointer- border-1 border-transparent hover:border-[#58a6ff] hover:bg-transparent py-2 px-4 rounded-lg hover:text-[#58a6ff] bg-[#58a6ff] text-white ease-in-out duration-300">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}