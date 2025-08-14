import React from "react";
import Lottie from "lottie-react";
import rocketAnimation from "../animations/rocket.json";
import "./Herooo.css";
import { useParallax } from "../hooks/useParallax";

const Hero = ({ onLaunch }) => {
  // Apply parallax to hero elements
  useParallax(".hero-content", 0.02);

  // Handle button click with optional star-shooting animation
  const handleLaunchClick = () => {
    // Trigger star-shooting effect if defined
    const starfield = document.getElementById("starfield");
    if (starfield && starfield.classList) {
      starfield.classList.add("shooting-stars");
      setTimeout(() => {
        starfield.classList.remove("shooting-stars");
      }, 1500);
    }

    // Call parent function to scroll and show navbar
    if (onLaunch) onLaunch();
  };

  return (
    <section className="hero-container">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/star.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <Lottie animationData={rocketAnimation} className="hero-rocket" />
        <h1 className="hero-title">Welcome to My Orbit</h1>
        <p className="hero-subtitle">
          Discover the stars of my work in this cosmic portfolio.
        </p>
        
        {/* Launch Button triggers smooth scroll & animation */}
        <button 
          className="launch-btn" 
          onClick={handleLaunchClick}
        >
          Launch Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;







