import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const ProjectHeading = () => {
    const sectionRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {
        gsap.to(textRef.current, {
            xPercent: -150,
            scrollTrigger: {
                trigger: sectionRef.current,
                scroller: "body",
                start: "top 0%",
                end: "top -100%",
                scrub: 1,
                pin: true,
                // markers: true,
            },
        })
    }, [])

    return (
        <section ref={sectionRef} className=''>
            <div className="h-screen w-full flex items-center">
                <h1
                    ref={textRef}
                    className="text-[40vw] font-semibold tracking-tighter font-mono uppercase text-[#a6a6a6] whitespace-nowrap translate-x-96 absolute top-15"
                >
                    projects
                </h1>

            </div>
        </section>
    )
}

export default ProjectHeading
