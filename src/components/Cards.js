import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>My Portfolio</h1>
      <p>Explore some of my featured projects and works</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/portfolio1.jpg"
              text="A modern e-commerce website with React and Firebase"
              label="Web Development"
              path="/projects/ecommerce"
            />
            <CardItem
              src="images/portfolio2.jpg"
              text="A dynamic weather app fetching real-time data"
              label="API Integration"
              path="/projects/weather-app"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/portfolio3.jpg"
              text="A responsive portfolio website built with React"
              label="Web Design"
              path="/projects/portfolio"
            />
            <CardItem
              src="images/portfolio4.jpg"
              text="An interactive task management app with full CRUD"
              label="Full Stack"
              path="/projects/task-manager"
            />
            <CardItem
              src="images/portfolio5.jpg"
              text="An AI-powered chatbot integrated with OpenAI's API"
              label="Machine Learning"
              path="/projects/chatbot"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
