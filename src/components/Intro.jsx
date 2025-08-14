import React from "react";
import "./Intro.css";

const Intro = () => {
  // Access Vite environment variables
  const email = import.meta.env.VITE_GMAIL;
  const phone = import.meta.env.VITE_PHONE;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <section className="intro-section" id="intro">
      {/* Floating Emojis */}
      <div className="emoji-bubble emoji1"><span className="rotate">🌍</span></div>
      <div className="emoji-bubble emoji2">🌚</div>
      <div className="emoji-bubble emoji3">🛰️</div>

      <div className="intro-card">
        {/* Futuristic Intro */}
        <div className="holo-intro">
          <h1 className="typing-line">👾 Meet the Captain...</h1>
          <h2 className="futuristic-name">
            Hello, I’m <span>Shivatimika</span>
            <span className="ufo">🛸</span>
          </h2>
        </div>

        {/* Profile Image */}
        <div className="intro-image-wrapper">
          <img src="/ShivLogo.png" alt="Shivatimika" className="intro-image" />
        </div>

        {/* Description */}
        <div className="intro-text">
          <p>
            I am a <strong>Full-Stack Web Developer</strong> with a passion for
            crafting <strong>visually stunning and highly interactive web experiences</strong>.
            I love creating <strong>smooth animations, modern UI/UX, and responsive designs </strong>
            that leave a lasting impression.
          </p>

          <p>
            My creative process often begins by exploring different websites for inspiration,
            then transforming those ideas into <strong>unique, functional, and polished projects</strong>.
            I excel at <strong>translating Figma designs into pixel-perfect, responsive web pages</strong>,
            combining <strong>strong frontend aesthetics</strong> with <strong>solid backend knowledge </strong>
            to deliver <strong>high-performance, user-friendly applications</strong>.
          </p>

          <p>
            I am <strong>ready to work, collaborate, and take on freelance projects</strong>,
            bringing <strong>creative ideas to life</strong> and helping teams
            <strong> build impactful digital products</strong>.
          </p>
        </div>

        {/* Contact Section */}
<div className="intro-contact-section">
  <h3 className="contact-heading">Contact Me:</h3>
  <div className="intro-contact-icons">
    <a href={email} target="_blank" rel="noopener noreferrer">
      <img src="/Mail.jpeg" alt="Gmail" />
    </a>
    <a href={phone}>
      <img src="/phn.jpeg" alt="Phone" />
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer">
      <img src="/git.jpeg" alt="GitHub" />
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <img src="/link.jpeg" alt="LinkedIn" />
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default Intro;














