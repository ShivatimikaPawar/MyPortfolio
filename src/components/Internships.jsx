import React from "react";
import "./Internships.css";

const Internships = () => {
  const internships = [
    { 
      year: "2024", 
      company: "Acemegrade (Mood Indigo IIT BOMBAY)", 
      role: "Artificial Intelligence Intern",
      duration: "Aug 2024 - Sep 2024"
    },
    { 
      year: "2025", 
      company: "Google Development Club (MU)", 
      role: "AI & Machine Learning Intern",
      duration: "June 2025 - July 2025"
    },
    { 
      year: "2025", 
      company: "Unified Mentor", 
      role: "Full Stack Web Development Intern",
      duration: "July 2025 - Present"
    },
  ];

  return (
    <section className="internship-section">
      <div className="internship-card">
        <h2 className="section-title">Internships</h2>
        <p className="section-subtitle">
          Lessons, Challenges, and Skills I Gained Along the Way
        </p>
        
        <div className="timeline">
          {internships.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker">
                <span className="year">{item.year}</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3 className="company">{item.company}</h3>
                <p className="role">{item.role}</p>
                <p className="duration">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {item.duration}
                </p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;


