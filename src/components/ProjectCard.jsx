import React from "react";
import "./Projects.css";

const ProjectCard = ({ title, logo, link, status }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Opens in a new tab
    }
  };

  return (
    <div
      className={`project-card ${link ? "clickable" : ""}`}
      onClick={handleClick}>
        {/* Status section */}
      {status && (
        <div className="project-status">
          <span className="status-dot"></span>
          <span className="status-text">{status}</span>
        </div>
      )}
      <img src={logo} alt={title} className="project-logo" />
      <h3 className="project-title">{title}</h3>

    </div>
  );
};

export default ProjectCard;


