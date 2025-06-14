// Certifications.jsx
import React from 'react';
import './Certifications.css';
import Huawei from '../../assets/Huawei.png';
import ALP from '../../assets/ALP.PNG';
import Udemy from '../../assets/Udemy.jpg';
import Simplilearn from '../../assets/Simplilearn.PNG';
import Degree from '../../assets/Degree.PNG';
import Greatlearn from '../../assets/Greatlearn.jpg';


const certifications = [


  {
    title: "BSc Degree in BIT",
    subtitle: "Malawi University of Science and Technology",
    tags: ["Business", "Technology",],
    certLink: "#",
    image: Degree
  },

  {
    title: "ReactJS Certification",
    subtitle: "Simplilearn",
    tags: ["React", "Java Script",],
    certLink: "#",
    image: Simplilearn
  },
  {
    title: "Data Analytics with Python",
    subtitle: "Udemy Certification",
    tags: ["Python", "Data analytics",],
    certLink: "#",
    postLink: "#",
    image: Udemy
  },
  {
    title: "Aspire Leadership Certification",
    subtitle: "Havard Business School",
    tags: ["Public Speaking", "Leadership Skills"],
    certLink: "#",
    image: ALP
    
  },
  {
    title: "Huawei Certificate of Excellence",
    subtitle: "Huawei ICT Competition",
    tags: ["Computing Track"],
    certLink: "#",
    image: Huawei
  },
    {
    title: "Data Analytics with PowerBI",
    subtitle: "Great Learning Certification",
    tags: ["Business Intelligence"],
    certLink: "#",
    postLink: "#",
    image: Greatlearn
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <hr className="section-divider" />

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
              <div className="cert-tags">
                {cert.tags.map((tag, idx) => (
                  <span className="cert-tag" key={idx}>{tag}</span>
                ))}
              </div>
              <div className="cert-buttons">
                <a href={cert.certLink} className="view-btn">📄 View Certificate</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
