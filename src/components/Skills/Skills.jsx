import React from 'react';
import './Skills.css'; // Import the CSS file
import { Database, GitBranch, Layout, Monitor } from 'lucide-react';

// Skill progress bar component
const SkillBar = ({ skill, percent }) => (
  <div className="skill-bar">
    <div className="skill-header">
      <span>{skill}</span>
      <span>{percent}%</span>
    </div>
    <div className="skill-track">
      <div className="skill-fill" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

// Icons for "What I Do"
const iconMap = {
  database: <Database className="icon" />,
  'git-branch': <GitBranch className="icon" />,
  layout: <Layout className="icon" />,
  monitor: <Monitor className="icon" />,
};

// Service card
const Service = ({ icon, title }) => (
  <div className="service">
    <div>{iconMap[icon]}</div>
    <h4>{title}</h4>
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <hr className="section-divider" />
      <div className="skills-grid">
        
        {/* Technical Skills */}
        <div className="technical-skills">
          <h3 className='skillsub'>Technical Skills</h3>
          <SkillBar skill="HTML & CSS" percent={90} />
          <SkillBar skill="ReactJS" percent={85} />
          <SkillBar skill="Python" percent={70} />
          <SkillBar skill="JavaScript" percent={80} />
          <SkillBar skill="PHP" percent={65} />
        </div>

        {/* What I Do */}
        <div className="what-i-do">
          <h3 className='skillsub'>What I Do</h3>
          <Service icon="database" title="Database Design" />
          <Service icon="git-branch" title="Version Control" />
          <Service icon="layout" title="Web App Development" />
          <Service icon="monitor" title="Front-End Development" />
        </div>

      </div>
    </section>
  );
};

export default Skills;
