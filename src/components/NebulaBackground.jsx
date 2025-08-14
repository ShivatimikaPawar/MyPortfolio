// src/components/NebulaBackground.jsx
import React, { useEffect } from "react";
import "./NebulaBackground.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NebulaBackground = () => {
  useEffect(() => {
    const layers = gsap.utils.toArray(".nebula");

    layers.forEach((nebula, i) => {
      const depth = (i + 1) * 154; // how far it drifts

      gsap.to(nebula, {
        y: depth,
        opacity: 0,        // fades out
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true, // smooth follow scroll
        },
      });
    });
  }, []);

  return (
    <div className="nebula-layer">
      <div className="nebula nebula1"></div>
      <div className="nebula nebula2"></div>
      <div className="nebula nebula3"></div>

      {/* Twinkling stars inside nebula */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="nebula-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NebulaBackground;






