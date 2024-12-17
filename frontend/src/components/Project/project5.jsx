import React, { useEffect } from 'react';
import './project5.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Project5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default settings
  }, []);

  return (
    <>
      <div className="project5">
        <h1 className="main-heading" data-aos="fade-down">Blogging App</h1>
        <div className="project-description" data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            The Blogging App is my first backend-focused project, built without the use of
            frontend frameworks or libraries. This application demonstrates my understanding of
            backend development fundamentals, including authentication, authorization, session
            management, and the implementation of the EJS template engine. Key features include
            JWT-based security and session ID handling, reflecting a solid grasp of backend
            development best practices.
          </p>
          <a
            href="https://github.com/SyedAbeernHaider/Blogging_App"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="github-logo"></i> View Repository on GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Project5;
