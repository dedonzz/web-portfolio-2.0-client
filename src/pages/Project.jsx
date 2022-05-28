import React from "react";
import Nav from "../components/Nav";
import Foot from "../components/Foot";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="project">
      <Nav />
      <div className="project-container">
        <div className="project-cards">
          <h2>Web Portfolio</h2>
          <img src="assets/project-2.png" alt="project-2" />
          <p>
            Migrate old portfolio static website to react.js framework with
            features below: <br />
            <ul>
              <li>Change theme color</li>
              <li>multiple pages linked by reac router</li>
              <li>blog linked to mongodb (developing)</li>
            </ul>
          </p>
          <p>
            Tech used:
            <ul>
              <li>HTML, CSS(SCSS), JS(React)</li>
              <li>react-router, react-reveal</li>
              <li>mongodb, express, node as backend</li>
            </ul>
          </p>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Project;
