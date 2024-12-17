import React, { useEffect } from 'react';
import './project2.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Project2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default settings
  }, []);

  return (
    <>
      <div className='project2'>
        <h1 data-aos="fade-down">Sundown Studio (Clone)</h1>
        <div className='portfolio-description' data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            In this project, I challenged myself to recreate various unique animations while
            maintaining a clean and responsive design. Using HTML, CSS, and JavaScript, I focused
            on mastering dynamic effects and layout techniques. This project greatly enhanced my
            skills in crafting engaging user experiences.
          </p>
          <a
            href='https://github.com/SyedAbeernHaider/Animated-Site-'
            target='_blank'
            rel='noopener noreferrer'
            className='github-link'
          >
            <i className="github-logo"></i> View Repository on GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Project2;
