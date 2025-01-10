import React from "react";
import "../../App.css";

function AboutMe() {
  return (
    <div className="page-container">
      <div className="content">
        <section className="hero">
          <div>
            <h1>Hello, I'm Nadia Rafidah</h1>
            <p>A passionate developer and problem solver</p>
            <a href="#projects" className="btn">
              Explore My Work
            </a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            I'm a software developer specializing in creating efficient and
            user-friendly web applications. I have experience in React,
            JavaScript, and backend technologies, with a focus on delivering
            high-quality solutions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
