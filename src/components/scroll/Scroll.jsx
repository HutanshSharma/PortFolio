import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "./Arrow";

export default function Scroll() {

  const { contextSafe } = useGSAP(() => {
    const scrollhandler = contextSafe((e) => {
      const direction = e.deltaY > 0 ? 1 : 0;

      gsap.to(".marque", {
        x: direction ? "-200%" : "0%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

    gsap.to('.arrow', {
        rotate: direction ? 180 : 0,
        duration: 0.5,
    });
    });

    window.addEventListener("wheel", scrollhandler);

    return () => {
      window.removeEventListener("wheel", scrollhandler);
    };
  });

  return (
    <div id="move" className="bg-gradient-to-b from-[#39d353] to-[#58a6ff] font-semibold">
      {[...Array(5)].map((_, i) => (
        <div className="marque" key={i}>
          <h1 className="text-4xl lg:text-6xl">OPEN FOR WORK</h1>
          <Arrow />
        </div>
      ))}
    </div>
  );
}
