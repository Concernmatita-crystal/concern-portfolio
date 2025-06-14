import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('university');

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <hr className="section-divider" />

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'university' ? 'active' : ''}`}
          onClick={() => setActiveTab('university')}
        >
          🎓 University
        </button>
        <button
          className={`tab-button ${activeTab === 'highschool' ? 'active' : ''}`}
          onClick={() => setActiveTab('highschool')}
        >
          🏫 High School
        </button>
      </div>

      <div className="education-card-container">
        {activeTab === 'university' && (
          <div className="education-card">
            <h3 className="education-card-title">BSc in Business Information Technology</h3>
            <span className="education-card-subtitle">
              Malawi University of Science and Technology (2019 - 2024)
            </span>
            <p className="education-card-description">
              Specialized in tech-business integration, project management, and system development.
            </p>
            <h4 className="education-card-heading">📘 Key Courses</h4>
            <ul className="education-card-list">
              <li>Data Structures and Algorithms</li>
              <li>Machine Learning</li>
              <li>Web Technologies</li>
              <li>Systems Design and Development</li>
              <li>Database Management</li>
              <li>Computer Networking</li>
            </ul>
          </div>
        )}

        {activeTab === 'highschool' && (
          <div className="education-card">
            <h3 className="education-card-title">Malawi School Certificate of Education</h3>
            <span className="education-card-subtitle">
              Chipasula Secondary School (2013 - 2018)
            </span>
            <p className="education-card-description">
              Graduated with 15 points, with a focus on sciences and mathematics.
            </p>
            <h4 className="education-card-heading">📘 Key Courses</h4>
            <ul className="education-card-list">
              <li>Mathematics</li>
              <li>English</li>
              <li>Physics & Chemistry</li>
              <li>Agriculture</li>
              <li>Biology</li>
              <li>Geography</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
