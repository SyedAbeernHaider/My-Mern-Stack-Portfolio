import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import './skill.css';

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <div className="skill">
      <h1 data-aos="fade-down">Skills</h1>

      <div className="skill-container">
        <div className="frontend" data-aos="fade-right">
          <h2>Frontend</h2>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <span className="skill-name">HTML (90%)</span>
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">CSS (80%)</span>
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">JavaScript (80%)</span>
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">React (78%)</span>
              <div className="progress" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>

        <div className="backend" data-aos="fade-left">
          <h2>Backend</h2>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <span className="skill-name">Node.js (80%)</span>
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">Express.js (70%)</span>
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">MongoDB (65%)</span>
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">VC System  (77%)</span>
              <div className="progress" style={{ width: '77%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress Bars */}
      <div className="circular-container">
        <div className="circular" data-aos="zoom-in">
          <div className="outer-circle" style={{ "--progress": "2" }}>
            <div className="inner-circle">
              <div className="percentage">2%</div>
              <div className="label">Work Experience</div>
            </div>
          </div>
        </div>

        <div className="circular" data-aos="zoom-in" data-aos-delay="200">
          <div className="outer-circle" style={{ "--progress": "40" }}>
            <div className="inner-circle">
              <div className="percentage">40%</div>
              <div className="label">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
