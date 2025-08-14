import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  const intro = document.querySelector(".intro-section");
  if (intro) {
    gsap.from(intro, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: intro,
        start: "top 80%",
      },
    });
  }


  const stars = document.querySelectorAll(".star");
  if (stars.length) {
    gsap.from(stars, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      scrollTrigger: {
        trigger: intro || stars[0],
        start: "top 90%",
      },
    });
  }
};


