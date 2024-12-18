import React, { useEffect } from 'react';
import './project4.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Project4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default settings
  }, []);

  return (
    <>
      <div className='project4'>
        <h1 data-aos="fade-down">Physical Fitness</h1>
        <div className='fitness-description' data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            Physical Fitness is a web application designed to inspire and guide users in achieving
            their fitness goals. This project focuses on showcasing workout routines, fitness tips,
            and tracking tools. Built using HTML, CSS, and JavaScript, it emphasizes a clean and
            user-friendly interface. The site is fully responsive, offering seamless functionality
            across all devices.
          </p>
          <a
            href='https://github.com/SyedAbeernHaider/Physical-Fitness'
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

export default Project4;
