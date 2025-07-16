import { useRef,useEffect } from "react";

export default function Canvas(){
    const canvas = useRef()

    useEffect(()=>{
        let c=canvas.current.getContext('2d')

        const gradient = c.createLinearGradient(0, 0, 0, canvas.current.height);
        gradient.addColorStop(0.75, '#39d353');
        gradient.addColorStop(1, '#58a6ff');
        
        const width = canvas.current.width
        const height = canvas.current.height

        let frequency=0.005
        let amplitude=20
        let increment=frequency
        let wavelength=100
        let dy=1
        let num=0

        function init(){
            c.beginPath()
            c.moveTo(0,height)
            if(num==0 || num==255) dy=-dy
            num+=dy
            let i
            for(i=0;i<width;i++){
                c.lineTo(i,(height/1.2)-Math.sin(i/wavelength+increment)*(amplitude*(Math.sin(increment))))
            }
            c.lineTo(i,height)
            c.lineTo(0,height)
            c.fillStyle=gradient
            increment+=frequency
            c.fill()
        }

        function animate(){
            requestAnimationFrame(animate)
            c.globalAlpha=0.08;
            c.clearRect(0,0,width,height);
            init()
        }

        animate()
        })

    return (
        <canvas ref={canvas} className="h-screen w-screen absolute top-0"></canvas>
    )

}