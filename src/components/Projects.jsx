// components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      description: 'A full-featured online shopping platform with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageColor: '#6C63FF',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity package including logo, business cards, and brand guidelines.',
      tags: ['Illustrator', 'Photoshop', 'Branding'],
      imageColor: '#FF6584',
      
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A productivity application for managing tasks and projects with team collaboration features.',
      tags: ['React', 'TypeScript', 'Firebase'],
      imageColor: '#4A44C6',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'design',
      description: 'Modern website design for a fine dining restaurant with online reservation system.',
      tags: ['UI/UX', 'Figma', 'Web Design'],
      imageColor: '#36B37E',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      category: 'fullstack',
      description: 'Analytics dashboard for social media metrics with real-time data visualization.',
      tags: ['React', 'Express', 'Chart.js', 'PostgreSQL'],
      imageColor: '#FFAB00',
    },
    {
      id: 6,
      title: 'Mobile App UI Design',
      category: 'design',
      description: 'User interface design for a fitness tracking mobile application.',
      tags: ['Figma', 'UI Design', 'Prototyping'],
      imageColor: '#6554C0',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Fullstack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'design', name: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="project-filters fade-in">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="project-image" 
                style={{ backgroundColor: project.imageColor }}
              >
                <div className="project-overlay">
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;