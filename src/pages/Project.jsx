import React from "react";
import Nav from "../components/Nav";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="project">
      <Nav />
      <div className="project-container">
        <div className="project-cards">
          <h2>Web Portfolio 1.0</h2>
          <img src="assets/project-1.png" alt="project-1" />
          <p>
            My first portfolio webpage. Was deployed on AWS. Simple static
            webpage.
          </p>
          <p>Tech: HTML, JS, CSS</p>
        </div>
        <div className="project-cards">
          <h2>Web Portfolio 2.0</h2>
          <img src="assets/project-2.png" alt="project-2" />
          <p>
            Based on portfolio 1.0. Migrate to react.js with additional features
            like change theme color, multiple pages, etc...
          </p>
          <p>Tech: HTML, CSS(SCSS), JS(React), react-route, react-reveal</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
