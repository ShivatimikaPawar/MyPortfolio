import { useEffect } from "react";

export const useParallax = (selector, speed = 0.02) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;

      elements.forEach((el) => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [selector, speed]);
};
