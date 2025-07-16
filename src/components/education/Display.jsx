import data from "./data.js"
import Box from "./Box"
import { Fragment } from "react"
import { useState } from "react"

export default function Display({ref,active}){
    let classes="flex flex-col md:grid md:grid-cols-2 gap-16 md:gap-32 ml-10 sm:ml-20 mr-4 md:mx-4 lg:mx-10 fade-in"

    if(active==="education"){
        classes+=" active"     
    }

    return (
        <section className="py-16 flex items-center justify-center relative " ref={ref} id="education">
            <div className="absolute h-5/6 w-0.5 left-5 sm:left-10 md:left-1/2 bg-gradient-to-b from-[#39d353] to-[#58a6ff]  top-40"></div>
            <div className="flex flex-col justify-center items-center w-full md:max-w-4/5 2xl:max-w-2/3">
                <h2 className="text-center text-4xl sm:text-5xl font-semibold mb-15 bg-gradient-to-b from-[#39d353] to-[#58a6ff] bg-clip-text text-transparent border-b-4 pb-4 border-[#58a6ff]">Education</h2>
                <div className={classes} >
                    {data.map((val,idx)=>{
                        if(idx%2===0){
                            return(
                                <Fragment key={idx}>
                                    <Box {...val} direction={'right'}/>
                                    <div className="hidden md:block" />
                                    <div className="hidden md:block"/>
                                </Fragment>
                            )
                        }
                        else{
                            return <Box key={idx} {...val} direction={'left'}/>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}