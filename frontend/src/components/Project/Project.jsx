import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import 'aos/dist/aos.css';
import AOS from 'aos';
import './project.css';

AOS.init();

const ProjectCard = ({ title, description, image, projectId }) => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleViewDetails = () => {
    navigate(`/project${projectId}`);  // Navigate to the respective project page
  };

  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-actions">
        <button onClick={handleViewDetails} className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: 'Tech Nova Official (Frontend)',
      description: 'This is my own community frontend based website using HTML, CSS, and JS.',
      image: '../../../project1.png',
      id: 1,
    },
    {
      title: 'Last Portfolio (Frontend)',
      description: 'This is my first Portfolio when I was learning HTML, CSS, and JS.',
      image: '../../../project2-modified.png',
      id: 2,
    },
    {
      title: 'Clone Sundown Studio (Frontend)',
      description: 'For learning animation, I tried to clone this highly animated site.',
      image: '../../../project3-modified.png',
      id: 3,
    },
    {
      title: 'Physical Fitness (Frontend)',
      description: 'This is my physical fitness website with a little animation in the frontend.',
      image: '../../../project4-modified.png',
      id: 4,
    },
    {
      title: 'Blogging App (Backend)',
      description: 'This is a backend-based blogging app where I used EJS for frontend.',
      image: '../../../project5.png',
      id: 5,
    },
    {
      title: 'Task Management App (MERN Stack)',
      description: 'This is a MERN stack task management app with React for the frontend, Node.js for the backend, and MongoDB for the database.',
      image: '../../../project6-modified.png',
      id: 6,
    },
  ];

  return (
    <div className="project">
      <h1>My Recent Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            projectId={project.id} // Pass the project ID to the ProjectCard
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
