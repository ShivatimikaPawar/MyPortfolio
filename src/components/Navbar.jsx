import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Toggle from "./Toggle";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", type: "scroll", target: "#intro" },
    { name: "Projects", type: "route", path: "/ProjectPage" },
    { name: "Contact", type: "route", path: "/contact" },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on navigation
    if (link.type === "route") {
      navigate(link.path);
    } else if (link.type === "scroll") {
      const element = document.querySelector(link.target);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 60, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(link.target);
          if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
        }, 400);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navcontainer">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Logo Centered */}
        <div className="logo">
          <h4>.Shivatimika</h4>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="nav-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.type === "scroll" ? link.target : link.path}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Toggle (always visible in header) */}
        <div className="nav-right">
          <Toggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-toggle">
            <Toggle />
          </div>
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.type === "scroll" ? link.target : link.path}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








