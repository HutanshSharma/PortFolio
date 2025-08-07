import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"

export default function String(){
    const string= useRef()

    const finalPath = `M 10 100 Q 500 100 990 100`

    const { contextSafe } = useGSAP(() => {
    const moveHandler = contextSafe((e) => {
        const path = `M 10 100 Q ${e.offsetX} ${e.offsetY} 990 100`;
        gsap.to(string.current.querySelector("path"), {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
        });
    });

    const leaveHandler = contextSafe(() => {
        gsap.to(string.current.querySelector("path"), {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
        });
    });

    string.current.addEventListener("mousemove", moveHandler);
    string.current.addEventListener("mouseleave", leaveHandler);

    return () => {
        string.current.removeEventListener("mousemove", moveHandler);
        string.current.removeEventListener("mouseleave", leaveHandler);
    };
    }, { scope: string });

    return (
        <div ref={string}>
            <svg width="1000" height="200">
                <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent"></path>
            </svg>
        </div>
    )
}