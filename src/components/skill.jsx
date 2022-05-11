import React from "react";
import {
  SiR,
  SiMysql,
  SiJavascript,
  SiReact,
  SiMicrosoftexcel,
} from "react-icons/si";
import Zoom from "react-reveal/Zoom";
import "./styles/Skill.css";

const Skill = () => {
  return (
    <div id="skill" className="skill">
      <h2 className="skill-intro">
        Been crafting the <span>skills</span> of statistics and data analysis.
        Self-taught frontend developer.
      </h2>
      <Zoom duration={1000}>
        <div className="skill-default">
          <SiR size={35} className="skill-icon" />
          <p>R</p>
          <div className="skill-bar skill-r"></div>
        </div>
      </Zoom>
      <Zoom duration={1500}>
        <div className="skill-default">
          <SiMysql size={35} className="skill-icon" />
          <p>MySQL</p>
          <div className="skill-bar skill-mysql"></div>
        </div>
      </Zoom>
      <Zoom duration={2000}>
        <div className="skill-default">
          <SiJavascript size={35} className="skill-icon" />
          <p>Javascript</p>
          <div className="skill-bar skill-js"></div>
        </div>
      </Zoom>
      <Zoom duration={2500}>
        <div className="skill-default">
          <SiReact size={35} className="skill-icon" />
          <p>Frontend</p>
          <div className="skill-bar skill-frontend"></div>
        </div>
      </Zoom>
      <Zoom duration={3000}>
        <div className="skill-default">
          <SiMicrosoftexcel size={35} className="skill-icon" />
          <p>Data Analysis</p>
          <div className="skill-bar skill-data"></div>
        </div>
      </Zoom>
    </div>
  );
};

export default Skill;
