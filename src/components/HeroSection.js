import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/portfolio-video.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1 className="headline">WELCOME TO MY PORTFOLIO</h1>
        <p className="subheadline">Discover My Work and Journey</p>
        <div className="hero-btns">
          <a href="#about" className="btn btn-primary">
            Learn More
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
