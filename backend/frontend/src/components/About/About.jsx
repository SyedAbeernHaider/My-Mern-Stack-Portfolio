import React, { useEffect } from "react";
import "./about.css";
import image from "../home/./my1f-removebg-preview-modified.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="about">
        <div
          className="heading"
          data-aos="fade-down"
        >
          <h1 className="text-align-center">ABOUT ME</h1>
        </div>
        <div className="main-content">
          <div
            className="about-me"
            data-aos="fade-up"
          >
            <div
              className="about-img"
              data-aos="fade-right"
            >
              <img src={image} alt="Syed Abeer" />
            </div>
            <div
              className="aboutme-hp"
              data-aos="fade-left"
            >
              <h1 className="h1">Personal & Professional Background</h1>
              <p>
                I am Syed Abeer Bin Haider, a 20-year-old tech enthusiast from
                Pakistan, driven by a passion for innovation and growth in the
                field of web development. Currently pursuing a Bachelor's degree
                in Computer Science at the University of Karachi, my academic
                journey began with an A-One grade in Matriculation from Programmer
                School, followed by a successful tenure at Government Islamia
                Science College.
              </p>
              <p>
                In January 2024, I embarked on a transformative journey in web
                development, starting with frontend technologies and evolving into
                a skilled MERN stack developer. I see every challenge as an
                opportunity to learn and improve, constantly striving to refine my
                craft. My greatest motivation lies in working alongside
                like-minded individuals, contributing to impactful projects, and
                fostering growth within the tech community.
              </p>

              <h1
                className="institute"
                data-aos="zoom-in"
              >
                Institutions
              </h1>
              <div
                className="chart" data-aos="zoom-in">
                <div className="past">
                  <h4 className="school">
                    School : <span className="span">Programmer School</span>
                  </h4>
                  <h4 className="school">
                    College : <span className="span">Govt Islamia Science College</span>
                  </h4>
                  <a
                    className="school"
                    href="https://www.linkedin.com/in/syedabeer12/"
                  >
                    LinkedIn : <span className="span">Syed Abeer Bin Haider</span>
                  </a>
                </div>

                <div className="uni">
                  <h4 className="school">
                    University : <span className="span">University Of Karachi</span>
                  </h4>
                  <h4 className="school">
                    Phone No : <span className="span">+92 327314846</span>
                  </h4>
                  <a
                    className="school"
                    href="https://www.facebook.com/profile.php?id=100092463235679"
                  >
                    Facebook : <span className="span">Abeer Haider</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
