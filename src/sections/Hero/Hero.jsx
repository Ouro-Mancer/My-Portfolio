import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const container = useRef();
    const headlineTop = useRef();
    const headlineBottom = useRef();
    const aboutBlock = useRef();
    const scrollDot = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Animate top headline entry
            gsap.from(headlineTop.current, {
                y: 150,
                opacity: 0,
                duration: 1.4,
                ease: 'expo.out',
            });

            // Animate bottom headline entry
            gsap.from(headlineBottom.current, {
                y: 150,
                opacity: 0,
                duration: 1.4,
                delay: 0.2,
                ease: 'expo.out',
            });

            // Animate about block
            gsap.from(aboutBlock.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                delay: 0.6,
                ease: 'power3.out',
            });

            // Scroll-triggered headline parallax
            gsap.to(headlineTop.current, {
                yPercent: -60,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
            gsap.to(headlineBottom.current, {
                yPercent: -50,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Scroll dot bounce
            gsap.to(scrollDot.current, {
                y: -10,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                duration: 2,
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative min-h-screen text-[#a6a6a6] flex flex-col justify-between px-8 pt-24 pb-10 "
        >
            <div className="overflow-hidden select-none">
                <h1
                    ref={headlineTop}
                    className="text-[13vw] leading-none font-extrabold uppercase tracking-tighter"
                >
                    <span className="block">
                        Front<span className="inline-block w-[5vw]"></span>–
                        <span className="inline-block w-[5vw]"></span>End
                    </span>
                </h1>
                <h1
                    ref={headlineBottom}
                    className="text-[11vw] leading-none font-extrabold uppercase tracking-tighter -mt-[2vw]"
                >
                    Developer
                </h1>
            </div>

            <div className="flex justify-between items-center" >
                <div
                    ref={aboutBlock}
                    className="w-full sm:w-[400px] text-sm leading-relaxed  space-y-2"
                >
                    <p className="text-xs uppercase tracking-wider text-gray-500">About</p>
                    <p>
                        Hi, I'm Mayank <span className="waving-hand">👋🏻</span> <br />
                        I'm a front-end developer based in Delhi, India, passionate about building immersive and creative digital experiences on the web.
                        I love experimenting with modern web technologies, motion design, and 3D to craft interfaces that not only look good but feel alive.

                    </p>

                </div>

                <div>

                    <img src="/assets/Portfolio image.png" alt="my-image" className='absolute -right-10 top-[18rem] h-[28rem]' />
                </div>
            </div>



            <div className="text-sm text-center text-gray-500 mt-8 pr-1 flex items-center justify-center">
                <span>Scroll down </span>
                <span className="border rounded-full p-2 m-2">
                    <span
                        ref={scrollDot}
                        className="inline-block h-1 w-1 rounded-full bg-gray-500"
                    ></span>
                </span>
            </div>
        </section>
    );
};

export default Hero;
