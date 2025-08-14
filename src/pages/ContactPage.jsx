import React from "react";
import ContactDock from "../components/ContactDock"; // Adjust path
import NebulaBackground from "../components/NebulaBackground";
import StarField from "../components/StarField";
import Footer from "../components/Footer";
import "./Contact.css";

const ContactPage = () => {
  const email = import.meta.env.VITE_GMAIL;
  const phone = import.meta.env.VITE_PHONE;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <div className="contact-page-container">
      {/* Background */}
      <NebulaBackground />
      <StarField theme="dark" />

      <div className="contact-page">
        <h1 className="contact-page-heading">
          <span className="postbox">📬</span> Contact Station:
        </h1>
        <p className="contact-scroll-message">
           Messages Here! Your message is always welcome here.
        </p>

        <div className="contact-intro">
          I'm open to freelance opportunities, collaborations, or just a friendly chat about space, code, or design.
        </div>

        <div className="intro-contact-icons">
          <a href={email} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <img src="/Mail.jpeg" alt="Gmail" />
          </a>
          <a href={phone} aria-label="Phone">
            <img src="/phn.jpeg" alt="Phone" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/git.jpeg" alt="GitHub" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/link.jpeg" alt="LinkedIn" />
          </a>
        </div>

        <ContactDock />
        
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;



