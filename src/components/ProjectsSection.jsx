import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "Brofessor",
    logo: "/brolo.png",  
    link: "/projects/brofessor",
    status: "Currently Building",
  },

  {
    title: "Portfolio",
    logo: "/port.png",
    link: "https://finova-w9hl.onrender.com",
  },

  {
    title: "Finova",
    logo: "/finova.png",
    link: "https://finova-w9hl.onrender.com",
  },

  {
    title: "Breezo",
    logo: "/Breezo.png",
    link: "https://breezoooo.netlify.app",
  },

  {
    title: "Divyagatha",
    logo: "/Divya.png",
    link: "https://divyagatha.netlify.app",
  },

  {
    title: "BusBuddy V2.0",
    logo: "/buss.png",
    link: "https://www.figma.com/design/oxiND8djdfhoZLDot0p5cV/Untitled?node-id=1-902&t=2bauYGuviLexOmSM-0",
  },
  
  {
    title: "BusBuddy",
    logo: "/bus.png",
    link: "https://drive.google.com/drive/folders/1tIdYz2KEg2n_OPiQxSiNKhaaag9mP9TT?usp=drive_link",
  },

  {
    title: "Todopia",
    logo: "/todopia.png",
    link: "https://todopia.netlify.app/",
  },

  {
    title: "OrbitCarousel",
    logo: "/orbit.png",
    link: "https://shivatimikapawar.github.io/OrbitCarousel/",
  },

  {
    title: "HotstarClone",
    logo: "/hot.png",
    link: "https://codesandbox.io/p/sandbox/hotstar-clone-project-forked-d5kcjw?file=%2Findex.js",
  },

  {
    title: "Home Of Flavors",
    logo: "/flavor.png",
    link: "https://shivatimikapawar.github.io/Landing_page1",
  },

];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-card">
        <h2 className="projects-heading">Projects</h2>
        <p className="projects-subheading">
          Explore my recent work. Click to view details.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
