import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div>
        <h2 className="section-title">Experience</h2>
        <hr className="section-divider" />
      </div>

      <div className="timeline">
        {/* Malawi Posts Corporation */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>ICT Intern</h2>
            <span>📍Malawi Posts Corporation (2023 - Present)</span>
            <h4 className='timeline-content-title'>Overview</h4>
            <p>Worked on IT infrastructure maintenance, developed IT risk management documents, handled virus-infected payroll systems, and assisted in website troubleshooting.</p>
            <h4 className='timeline-content-title'>🛠 Key Responsibilities</h4>
            <ul className='Key-courses-list'>
              <li>Created IT risk documentation and recovery plans</li>
              <li>Supported network troubleshooting and system security</li>
              <li>Managed and updated company website (WordPress)</li>
              <li>Assisted in virus scanning and system restoration</li>
            </ul>
          </div>
        </div>

        {/* Ntha Foundation */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Business Development Associate</h2>
            <span>🚀 Ntha Foundation (2022 - 2023)</span>
            <h4 className='timeline-content-title'>Overview</h4>
            <p>Led tech-driven youth empowerment initiatives and content strategy for the Digital Skills for Africa platform. Contributed to project planning and stakeholder engagement.</p>
            <h4 className='timeline-content-title'>🛠 Key Contributions</h4>
            <ul className='Key-courses-list'>
              <li>Served as Content Manager for the e-learning platform</li>
              <li>Designed youth-targeted digital skill programs</li>
              <li>Organized workshops and mentorship sessions</li>
              <li>Collaborated with cross-functional innovation teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
