import React from "react";
import Nav from "../components/Nav";
import Foot from "../components/Foot";
import Zoom from "react-reveal/Zoom";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="project">
      <Nav />
      <div className="project-container">
        <Zoom>
          <div className="project-cards">
            <h2>Web Portfolio</h2>
            <img src="assets/project-2.png" alt="project-2" />
            <p>
              Migrate old portfolio website to react.js framework with features
              below: <br />
            </p>
            <ul>
              <li>Change web's theme color</li>
              <li>Personal blog with markdown and latex editor</li>
              <li>Full responsive</li>
            </ul>
            <p>Tech used:</p>
            <ul>
              <li>HTML, CSS(SCSS), JS(React)</li>
              <li>react-router, react-reveal</li>
              <li>mongodb, express, node as backend</li>
            </ul>
          </div>
        </Zoom>
      </div>
      <Foot />
    </div>
  );
};

export default Project;
