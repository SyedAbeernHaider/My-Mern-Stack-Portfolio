import React, { useEffect } from 'react';
import './project1.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Project1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default settings
  }, []);

  return (
    <>
      <div className='project1'>
        <h1 data-aos="fade-down">Tech Nova Official</h1>
        <div className='project-description' data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            This is my frontend app where I used HTML, CSS, and JavaScript. In this project,
            I created a frontend web app for my small community. I focused heavily on design
            elements to ensure it looks modern and appealing.
          </p>
          <a
            href='https://github.com/SyedAbeernHaider/TechNova-My-Community-Site'
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

export default Project1;

