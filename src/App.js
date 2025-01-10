import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AboutMe from "./components/pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
