import React, { useEffect, useRef } from "react";
import "./home.css";
import image from "./my1f-removebg-preview-modified.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });

    // Initialize Typed.js
    const typed = new Typed(typingRef.current, {
      strings: ["Syed Abeer Here !!"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      // Cleanup Typed.js
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      {/* Image section */}
      <div className="image-div d-flex" data-aos="fade-right">
        <img src={image} alt="Syed Abeer" />
      </div>

      {/* Text section */}
      <div className="text-container" data-aos="fade-left">
        <h1>
          HI <span className="typing" ref={typingRef}></span>
        </h1>
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Full Stack/ MERN Stack Web Developer
        </h2>
        <p data-aos="fade-up" data-aos-delay="400">
          I am a passionate fresh MERN stack web developer with a solid command
          of HTML, CSS, JavaScript, and advanced frameworks and libraries such
          as React, Node.js, Express.js, Redux Toolkit, and MongoDB for backend
          development. My goal is to leverage my skills to build scalable,
          user-friendly web applications while continuously learning and
          improving. I'm eager to work with a dynamic team where I can
          contribute effectively, collaborate, and expand my knowledge and
          experience in the field of web development. Let's create innovative
          solutions together!
        </p>
        <div className="btn-div d-flex" data-aos="fade-up" data-aos-delay="600">
          {/* Download CV Button */}
          <a href="/mycv.pdf" download="mycv.pdf">
            <button>Download CV</button>
          </a>
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
