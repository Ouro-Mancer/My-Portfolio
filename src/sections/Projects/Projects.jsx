import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(y - rect.height / 2) / 40;
    const rotateY = (x - rect.width / 2) / 40;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      transformOrigin: "center",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.3,
    });
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div
            ref={rydeRef}
            className="first-project-wrapper group"

          >
            <div className="image-wrapper relative" onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <img src="/images/project1.jpg" alt="Ryde App Interface" />
              <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://github.com/Ouro-Mancer/HackNova-3d" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-lg hover:scale-110 transition" />
                </a>
                <a href="https://hack-nova-3d.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-lg hover:scale-110 transition" />
                </a>
              </div>
            </div>
            <div className="text-content text-[#a6a6a6]">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-[#e8e8e8] md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden text-[#a6a6a6]">
            <div
              className="project group"
              ref={libraryRef}

            >
              <div className="image-wrapper bg-[#FFEFDB] relative" onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                <img src="/images/project2.png" alt="Library Management Platform" className="" />
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="https://github.com/Ouro-Mancer/LMS-Library-Management-System" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-black text-lg hover:scale-110 transition" />
                  </a>
                  <a href="https://library.com" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-black text-lg hover:scale-110 transition" />
                  </a>
                </div>
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div
              className="project group"
              ref={ycDirectoryRef}

            >
              <div className="image-wrapper bg-[#FFE7EB] relative" onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                <img src="/images/project3.png" alt="YC Directory App" />
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="https://github.com/Ouro-Mancer/Brain-Tumor-Classification-App-using-deep-learning-models" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-black text-lg hover:scale-110 transition" />
                  </a>
                  <a href="https://brain-tumor-classification-ml.streamlit.app/" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-black text-lg hover:scale-110 transition" />
                  </a>
                </div>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;