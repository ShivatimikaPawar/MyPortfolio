import React from "react";
import "./SkillsGalaxy.css";

const SkillsGalaxy = () => {
  const fullStackSkills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "Node.js", "Express.js", 
    "MongoDB", "MySQL", "Apps Script", "Firebase", "Google API", "REST API", 
    "Authentication", "Python", "DSA (Basics)", "GitHub"
  ];

  const uiAnimationSkills = [
    "Figma", "Tailwind CSS", "Bootstrap", "Three.js", 
    "Canva", "LottieFiles", "GSAP"
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-card">
        <h2 className="skills-heading"><span className="write-emoji">🖊️</span> Skills Galaxy</h2>
        <p className="skills-subheading">
          My technologies, frameworks, and tools for building full‑stack and visually rich web applications.
        </p>

        {/* Full Stack Skills */}
        <h3 className="skills-subheading-title">Full‑Stack Development</h3>
        <div className="skills-badges">
          {fullStackSkills.map((skill, index) => (
            <span className="skill-badge" key={index}>
              {skill}
            </span>
          ))}
        </div>

        {/* UI & Animation Skills */}
        <h3 className="skills-subheading-title">UI/UX & Animations</h3>
        <div className="skills-badges">
          {uiAnimationSkills.map((skill, index) => (
            <span className="skill-badge" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGalaxy;






