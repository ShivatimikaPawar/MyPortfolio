import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import rocketAnim from "../animations/Spaceman.json";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Left Content */}
      <div className="herocontainer">
      <div className="hero-text">
        <h1> HELLO, EXPLORER!</h1>
        <h2>Step Into My Digital Universe</h2>
        <p>JOIN ME ON THIS JOURNEY </p>
        <p>THROUGH MY PORTFOLIO.</p>
        <div className="hero-buttons">
          <button className="btnn projects" onClick={() => navigate("/ProjectPage")}>
          Projects
          </button>
          <button className="btnn contact" onClick={() => navigate("/contact")}>
          Contact Me
          </button>
        </div>

      </div>

      {/* Space Scene */}
      <div className="hero-scene">

        {/* BIG Planet 1 */}
        <img src="/planet2.png" alt="Planet" className="planet planet1" />

        {/* Small Planets */}
        <img src="/planet4.png" alt="Planet" className="planet small" />

        {/* Astronaut */}
        <div className="rocket-container">
          <Lottie animationData={rocketAnim} className="rocket" loop />
        </div>
      </div>
      </div>
    </section>
  );
}





