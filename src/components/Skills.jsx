// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 87 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
    design: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Adobe Photoshop', level: 85 },
      { name: 'Figma', level: 95 },
      { name: 'Premiere Pro', level: 80 },
    ],
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title fade-in">My Skills</h2>
        <div className="skills-content">
          <div className="skills-category fade-in">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-list">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category fade-in">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-list">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category fade-in">
            <h3 className="category-title">Graphic Design</h3>
            <div className="skills-list">
              {skills.design.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;