import React, { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarField = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    // Warp speed effect on scroll
    const warp = gsap.to("#starfield canvas", {
      scaleY: 2,                 // stretch vertically
      filter: "blur(1px)",       // add blur for speed streaks
      transformOrigin: "center top",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      warp.kill();
    };
  }, []);

  return (
    <Particles
      id="starfield"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
        zIndex: 1, // Above nebula
        pointerEvents: "none",
      }}
      options={{
        background: { color: { value: "transparent" } }, // ✅ Transparent
        fpsLimit: 60,
        particles: {
          number: {
            value: 250,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#ffffff", "#ffe9c4", "#d4fbff"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            animation: { enable: true, speed: 0.5, minimumValue: 0.3 },
          },
          size: {
            value: { min: 0.2, max: 1.2 },
            animation: { enable: true, speed: 1, minimumValue: 0.1 },
          },
          move: {
            enable: true,
            speed: 0.05, // slow drift
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // ✅ Cursor effect
            onClick: { enable: true, mode: "push" },    // ✅ Click adds stars
          },
          modes: {
            repulse: { distance: 60, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarField;




