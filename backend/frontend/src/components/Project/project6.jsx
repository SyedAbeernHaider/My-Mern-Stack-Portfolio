import React, { useEffect } from 'react';
import './project6.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Project6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default settings
  }, []);

  return (
    <>
      <div className="project6">
        <h1 className="main-heading" data-aos="fade-down">Task Management App</h1>
        <div className="project-description" data-aos="fade-up">
          <h2>Project Description</h2>
          <p>
            The Task Management App is my first MERN stack project, combining React for the
            frontend with Express.js and Node.js for the backend, and MongoDB as the database.
            This app allows users to add, delete, and update tasks seamlessly. I implemented session
            storage and used Redux Toolkit for state management, ensuring a smooth and efficient user
            experience. The application is fully responsive and optimized for all device sizes,
            providing an intuitive task management system.
          </p>
          <a
            href="https://github.com/SyedAbeernHaider/Mern-Stack-Todo-App"
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

export default Project6;
