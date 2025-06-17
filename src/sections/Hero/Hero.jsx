import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["Front-End", "Full-Stack", "Creative-Web", "Front-End"];

const Hero = () => {
    const refs = useRef({});

    useGSAP(() => {
        const {
            container,
            headlineTop,
            headlineBottom,
            headlineCycler,
            aboutBlock,
            scrollDot,
        } = refs.current;

        const cycleTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8, paused: true });
        headlineCycler.textContent = WORDS[0];

        gsap.timeline()
            .from(headlineTop, { y: 700, opacity: 0, duration: 2, ease: 'expo.out' })
            .from(headlineBottom, { y: 700, opacity: 0, duration: 2, ease: 'expo.out' }, '-=1.6')
            .from(aboutBlock, { y: 100, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.0')
            .add(() => cycleTl.play());

        WORDS.slice(1).forEach(word => {
            cycleTl
                .to(headlineCycler, {
                    opacity: 0,
                    y: -200,
                    delay: 0.2,
                    duration: 1.3,
                    ease: 'power2.inOut',
                    onComplete: () => headlineCycler.textContent = word,
                })
                .to(headlineCycler, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power2.out',
                })
                .to({}, { duration: 1.5 });
        });

        gsap.to(headlineTop, {
            yPercent: -70,
            scrollTrigger: { trigger: container, start: 'top top', end: 'bottom top', scrub: 2 },
        });

        gsap.to(headlineBottom, {
            yPercent: -60,
            scrollTrigger: { trigger: container, start: 'top top', end: 'bottom top', scrub: 2 },
        });

        gsap.to(scrollDot, {
            y: -10,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            duration: 2,
        });
    }, []);

    const setRef = (key) => (el) => refs.current[key] = el;

    return (
        <header ref={setRef('container')} className="relative min-h-screen text-[#a6a6a6] flex flex-col justify-between px-8 pt-24 pb-10">
            <div className="overflow-hidden select-none">
                <h1 ref={setRef('headlineTop')} className="text-[13vw] leading-none font-extrabold uppercase tracking-tighter">
                    <div className="block overflow-hidden h-[13vw]">
                        <span ref={setRef('headlineCycler')} className="inline-block text-[13vw] font-extrabold uppercase leading-none tracking-tighter">
                            Front-End
                        </span>
                    </div>
                </h1>
                <h1 ref={setRef('headlineBottom')} className="text-[11vw] leading-none font-extrabold uppercase tracking-tighter -mt-[2vw]">
                    Developer
                </h1>
            </div>

            <div className="flex justify-between items-center">
                <div ref={setRef('aboutBlock')} className="w-full sm:w-[400px] text-sm leading-relaxed space-y-2 pl-3">
                    <p className="text-xs uppercase tracking-wider text-gray-500">About</p>
                    <p>
                        Hi, I'm Mayank <span className="waving-hand">👋🏻</span><br />
                        I'm a front-end developer based in Delhi, India, passionate about building immersive and creative digital experiences on the web. I love experimenting with modern web technologies, motion design, and 3D to craft interfaces that not only look good but feel alive.
                    </p>
                </div>
                {/* <img src="/assets/Portfolio image.png" alt="My portrait" className="absolute -right-10 top-[18rem] h-[28rem]" /> */}
                {/* <HeroModel /> */}


            </div>

            <div className="text-sm text-center text-gray-500 mt-8 pr-1 flex items-center justify-center">
                <span>Scroll down</span>
                <span className="border rounded-full p-2 m-2">
                    <span ref={setRef('scrollDot')} className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
                </span>
            </div>
        </header>
    );
};

export default Hero;
