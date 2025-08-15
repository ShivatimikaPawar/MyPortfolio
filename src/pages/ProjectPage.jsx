import React from "react";
import "./ProjectPage.css";
import NebulaBackground from "../components/NebulaBackground";
import StarField from "../components/StarField";

const projects = [
  {
    id: "brofessor",
    title: "Brofessor",
    image: "/Brofessorp.png",
    description:
      "Meet Brofessor — your ultimate placement prep buddy! Plan your tasks, take notes, get reminders, and chat with your AI assistant. With its animated dashboard, calendar planner, and dark/light mode, placement prep feels less stressful and more fun.",
    github: "/",
    demo: "/",
    status: "Currently Building",
  },

  {
    id: "Portfolio",
    title: "Portfolio",
    image: "/portt.png",
    description:
      "A fully responsive portfolio designed from scratch to showcase my work and personality. Includes custom scroll animations, interactive contact form with backend email integration, and light/dark themes. Built a full-stack contact form using Node.js and Gmail SMTP, Created GSAP-powered parallax effects for nebula background.",
    Link: "https://myportfolioooo.onrender.com/",
  },

  {
    id: "Breezo",
    title: "Breezo",
    image: "/breezop.png",
    description:
      "Turn weather checks into an adventure with Breezo — the animated weather website that gives daily, hourly, and weekly forecasts, a calendar overview, fun weather facts, and interactive blogs & feedback tools. Bright visuals + smooth animations make every visit informative and enjoyable.",
    github: "https://github.com/ShivatimikaPawar/Breezo",
    demo: "https://www.linkedin.com/in/shivatimika/overlay/1753374419833/single-media-viewer/?",
    Link: "https://breezoooo.netlify.app/",
  },
  {
    id: "divyagatha",
    title: "Divyagatha",
    image: "/divyap.png",
    description:
      "Step into Divyagatha, where the timeless legends of Lord Shiva come alive through an interactive storybook experience. Explore card-based spiritual stories, toggle through sacred journeys, and enjoy traditional storytelling in a modern, animated web interface.",
    github: "https://github.com/ShivatimikaPawar/divyagatha",
    demo: "https://www.linkedin.com/in/shivatimika/overlay/1755085657584/single-media-viewer/?profileId=ACoAAENaMJ0BHTZB6YSNiuEYBP2nf-_L7nWxD0c",
    Link: "https://divyagatha.netlify.app/"
  },
  {
    id: "BusBuddy2",
    title: "BusBuddy v2.0",
    image: "bussp.png",
    description:
      "Meet BusBuddy v2.0 — a redesigned and enhanced bus tracking platform. From Figma concepts to a fully functional website, it features animated landing pages, smooth navigation, and a modern interface, delivering a ready-to-use user experience.",
    demo: "https://www.linkedin.com/in/shivatimika/details/featured/1751805232152/single-media-viewer/?profileId=ACoAAENaMJ0BHTZB6YSNiuEYBP2nf-_L7nWxD0c",
    Link: "https://www.figma.com/design/oxiND8djdfhoZLDot0p5cV/Untitled?",
  },
  {
    id: "BusBuddy",
    title: "BusBuddy",
    image: "busp.png",
    description:
      "Stay connected to your ride with BusBuddy, the college & school bus tracking platform that combines real-time location updates, interactive routes, and a modern, animated interface for safe and stress-free travel.",
    demo: "https://www.linkedin.com/in/shivatimika/details/featured/1751801338245/single-media-viewer/?",
    Link:"https://drive.google.com/drive/folders/1tIdYz2KEg2n_OPiQxSiNKhaaag9mP9TT",
  },
  {
    id: "OrbitCarousel",
    title: "OrbitCarousel",
    image: "orbitp.png",
    description:
      "Take your visuals on a spin with OrbitCarousel — a 3D animated carousel that lets images orbit in style, delivering interactive and captivating motion effects for websites.",
    github: "https://github.com/ShivatimikaPawar/OrbitCarousel",
    demo: "https://www.linkedin.com/in/shivatimika/details/featured/1751802413171/single-media-viewer/?",
    Link:"https://shivatimikapawar.github.io/OrbitCarousel/",
  },
  {
    id: "homes",
    title: "Home Of Flavors",
    image: "flavorp.png",
    description:
      "Savor the taste of design with Home of Flavors — a beautifully crafted landing page showcasing delicious dishes, an inviting hero section, and elegant menu highlights, all built with Tailwind CSS for speed and responsiveness.",
    github: "https://github.com/ShivatimikaPawar/Landing_page1",
    demo: "https://www.linkedin.com/in/shivatimika/details/featured/1751795802210/single-media-viewer/?",
    Link:"https://shivatimikapawar.github.io/Landing_page1",
  },
  {
    id: "Hotstar",
    title: "Hotstar Clone",
    image: "hotp.png",
    description:
      "Experience the world of streaming with Hotstar Clone — a stunning landing page featuring dynamic banners, smooth transitions, and interactive content previews, delivering a cinematic first impression.",
      demo:"https://www.linkedin.com/in/shivatimika/details/featured/1751807622689/single-media-viewer/?",
    Link: "https://www.linkedin.com/in/shivatimika/",
  },
];

const ProjectPage = () => {
  return (
    <div className="project-page-container">
      {/* Background Effects */}
      <NebulaBackground />
      <StarField theme="dark" />

      <div className="project-page">
        <h1 className="project-page-heading">
          <span className="ufo">🛸</span> My Projects
        </h1>
        <p className="scroll-message">
          ✨ Scroll down to see all my awesome projects! ✨
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <div className="project-card-full" key={project.id}>
              <h2 className="project-card-title">
                {project.title}
                {project.status && (
                  <div className="project-status-dot">
                    <span className="dot"></span>
                    <span className="status-text">{project.status}</span>
                  </div>
                )}
              </h2>

              <div className="project-card-content">
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-card-info">
                  <p className="project-card-description">
                    {project.description}
                  </p>
                  <div className="project-card-icons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/git.jpeg" alt="GitHub" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/link.jpeg" alt="Live Demo" />
                    </a>
                  </div>

                  {/* Glass Effect Visit Button */}
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-button"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;








