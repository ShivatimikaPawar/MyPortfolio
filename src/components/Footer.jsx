import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  // Access env vars via import.meta.env
  const linkedinUrl = import.meta.env.VITE_LINKEDIN;
  const githubUrl = import.meta.env.VITE_GITHUB;
  const email = import.meta.env.VITE_GMAIL;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="dot"></span>
            <span className="brand">Let’s Connect.</span>
          </div>
          <p>
            Thank you for visiting my site. I appreciate your time and interest and look forward to connecting with you.
            </p>
        </div>

        <div className="footer-links">
          <Link to="/">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="social-footer">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Gmail"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/7a7a7a/gmail.png"
              alt="Gmail"
            />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/7a7a7a/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/24/7a7a7a/github.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shivatimika. All rights reserved</p>
        <div className="made">
          <span>Made by </span>
          <span className="name">
            <span className="pumping-heart" role="img" aria-label="heart">
              💗
            </span>{" "}
            Shivatimika
          </span>
        </div>
      </div>
    </footer>
  );
}