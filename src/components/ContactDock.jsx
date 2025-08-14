import React, { useState } from "react";
import "./ContactDock.css"

const ContactDock = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  // Declare formData state here
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent! Thanks for reaching out.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.error || data.message || "Unknown error"}`);
      }
    } catch {
      setStatus("Something went wrong, please try again later.");
    }
  };

  return (
    <section className="contact-dock">
      <div className="contact-card">
        <h2 className="contact-title"><span className="write-emoji">📬</span> Dock at My Station</h2>
        <p className="contact-titlee">Your message is always welcome here.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Signal</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default ContactDock;





