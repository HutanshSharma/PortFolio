import Message from "./Message"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ref,active}){
    let classes="flex flex-col gap-10"
    const info = useRef()
    const message = useRef()
    const label = useRef()

    useGSAP(()=>{
        gsap.from(info.current,{
            x:-100,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:info.current,
                scroller:'body',
                start:"top 90%"
            }
        })

        gsap.from(message.current,{
            x:100,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:message.current,
                scroller:'body',
                start:"top 90%"
            }
        })

        gsap.from(label.current,{
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:message.current,
                scroller:'body',
                start:"top 90%"
            }
        })
    })

    return (
        <footer className="flex items-center flex-col intro text-white bg-[rgba(13,17,23,0.85)]" ref={ref} id="contact">
            <h2 className="text-center mt-20 text-4xl sm:text-5xl font-semibold mb-15 bg-gradient-to-b from-[#39d353] to-[#58a6ff] bg-clip-text text-transparent border-b-4 pb-4 border-[#58a6ff]" ref={label}>Get in Touch</h2>
            <section className="w-5/6 lg:w-3/4">
                <div className="flex flex-col-reverse lg:flex-row gap-30 w-full my-20">
                    <div className={classes} ref={info}>
                        <div className="flex items-center gap-3 md:gap-10">
                            <i className="fa-solid fa-user bg-[#39d353] p-3 md:p-5 rounded-full text-black text-xl"></i>
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold">Location</h1>
                                <p>Hoshiarpur, Punjab, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-10">
                            <i className="fa-solid fa-envelope bg-[#39d353] p-3 md:p-5 rounded-full text-black text-xl"></i>
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold">Email</h1>
                                <p>hutanshsharma241005@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-10">
                            <i className="fa-solid fa-phone bg-[#39d353] p-3 md:p-5 rounded-full text-black text-xl"></i>
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold">Phone</h1>
                                <p>+91-9056553522</p>
                            </div>
                        </div>
                        <div className="flex gap-5 my-5">
                            <a href="https://github.com/HutanshSharma" className="hover:-translate-y-1.5 trasform-all duration-500"><i className="fa-brands fa-github bg-sky-400 p-2 rounded-full text-black text-xl hover:rotate-[360deg] trasform-all duration-500"></i></a>
                            <a href="https://www.linkedin.com/in/hutansh-sharma-3757a7320" className="hover:-translate-y-1.5 trasform-all duration-500"><i className="fa-brands fa-linkedin bg-sky-400 p-2 rounded-full text-black text-xl hover:rotate-[360deg] trasform-all duration-500"></i></a>
                            <a href="https://leetcode.com/u/HUTANSH_sharma/" className="hover:-translate-y-1.5 trasform-all duration-500"><i className="fa-solid fa-code bg-sky-400 p-2 rounded-full text-black text-xl hover:rotate-[360deg] trasform-all duration-500"></i></a>
                            <a href="https://x.com/HutanshSharma" className="hover:-translate-y-1.5 trasform-all duration-500"><i className="fa-brands fa-x-twitter bg-sky-400 p-2 rounded-full text-black text-xl hover:rotate-[360deg] trasform-all duration-500"></i></a>
                        </div>
                    </div>
                    <Message active={active} ref={message}/>
                </div>
                <div className="w-full h-0.5 bg-slate-400 my-5"></div>
                <div className="mb-10">
                    <p className="text-center text-slate-500">&copy; 2025 Hutansh Sharma. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    )
}