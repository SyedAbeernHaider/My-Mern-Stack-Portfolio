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
        <h1 data-aos="fade-down">My First Portfolio</h1>
        <div className='portfolio-description' data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            This is my first responsive portfolio designed with HTML, CSS, and JavaScript.
            Through this project, I developed a solid understanding of essential frontend concepts
            like layout design, styling, and responsiveness. It was a foundational experience
            that improved my confidence in building user-friendly web interfaces.
          </p>
          <a
            href='https://github.com/SyedAbeernHaider/My-First-Portfolio'
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

