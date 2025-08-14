import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import SkillsGalaxy from "../components/SkillsGalaxy";
import Internships from "../components/Internships";
import ContactDock from "../components/ContactDock";
import StarField from "../components/StarField";
import NebulaBackground from "../components/NebulaBackground";
import Navbar from "../components/Navbar";
import { initScrollAnimations } from "../animations/scrollAnimations";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    initScrollAnimations();

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      // Navbar appears only when user scrolls past hero
      setShowNavbar(currentScroll >= heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLaunch = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NebulaBackground />
      <StarField theme="dark" />
      <Navbar isVisible={showNavbar} />
      <Hero onLaunch={handleLaunch} />
      <Intro />
      <SkillsGalaxy />
      <ProjectsSection />
      <Internships />
      <ContactDock />
      <Footer />
    </>
  );
};

export default Home;