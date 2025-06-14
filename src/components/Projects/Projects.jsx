import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Digital Skills for Africa",
    description: "An LMS built to equip youth with essential digital skills.",
    tech: "WordPress, LearnDash, Elementor",
    link: "Digitalskillsforafrica.com",
  },


   {
    title: "Malawi Post Website",
    description: "A modern and responsive corporate website for Malawi Post Corporation.",
    tech: "WordPress, Elementor",
    link: "malawipost.post",
  },

   {
    title: "My Portfolio",
    description: "This portfolio website showcasing my work, skills, and projects.",
    tech: "React, Tailwind, TypewriterJS",
    link: "#",
  },

  {
    title: "MBS Document Management System",
    description: "An internal system for managing and organizing documents at MBS.",
    tech: "HTML, CSS, JavaScript, PHP",
    link: "#", // replace with actual link if available
  },

 
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <hr className="section-divider" />
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
