import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-about">
        <h2>About This Portfolio</h2>
        <p>
          Built with passion and dedication, this portfolio showcases my
          journey, projects, and skills. Let’s connect and create something
          amazing together!
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>Quick Links</h3>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-link-items">
            <h3>Follow Me</h3>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <section className="footer-social-media">
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        <small className="website-rights">
          © {new Date().getFullYear()} Nadia Rafidah. All rights reserved.
        </small>
      </section>
    </div>
  );
}

export default Footer;
