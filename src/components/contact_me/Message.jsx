export default function Message({active}){
    let classes="bg-[rgba(33,38,45,0.8)] px-4 sm:px-10 py-4 sm:py-5 rounded-xl w-full fade-in"

    if(active==="contact"){
        classes+=" active"     
    }

    const textclass="w-full border-1 border-slate-400 px-5 py-2 outline-none focus:border-b-2 focus:border-white rounded-lg"
    const areaclass="w-full min-h-48 border-1 border-slate-400 px-5 py-2 outline-none focus:border-white rounded-lg"
    return (
        <div className={classes}>
            <form action="https://formsubmit.co/hutanshsharma241005@gmail.com" method="POST" id="contactForm" className="flex flex-col gap-6">
                <input type="text" id="name" name="name" placeholder="Your Name" className={textclass} required />
                <input type="email" id="email" name="email" placeholder="Your Email" className={textclass} required />
                <input type="text" id="subject" name="subject" placeholder="Subject" className={textclass} required />
                <textarea id="message" name="message" placeholder="Your Message" className={areaclass} required></textarea>
                <button type="submit" className="bg-[#58a6ff] py-2 rounded-xl font-semibold hover:-translate-y-1 transition-all duration-500 hover:bg-transparent border-2 border-[#58a6ff] hover:text-[#58a6ff]">Send Message</button>
            </form>
        </div>
    )
}