import React from "react";
import "../../App.css";

function Projects() {
  return (
    <div className="page-container">
      <div className="content">
        <section className="hero">
          <div>
            <h1>My Projects</h1>
            <p>Discover the innovative projects I've worked on</p>
          </div>
        </section>
        <section className="section">
          <h2>Featured Projects</h2>
          <p>
            From web applications to machine learning models, here's a showcase
            of some of my favorite projects.
          </p>
          <a href="/projects" className="btn">
            View All Projects
          </a>
        </section>
      </div>
    </div>
  );
}

export default Projects;
