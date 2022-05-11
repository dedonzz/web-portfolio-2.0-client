import React from "react";
import Zoom from "react-reveal/Zoom";
import "./styles/Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h2 className="experience-intro">
        Work <span>experiences</span> I have.
      </h2>
      <div className="experience-container">
        <Zoom duration={1000}>
          <div className="experience-card">
            <h3 className="experience-title">Teaching Assistant (Contract)</h3>
            <h5 className="experience-subtitle">
              National Taiwan University <span>(2019/11 - Present)</span>
            </h5>
            <p className="experience-text">
              Partnered and as with teacher to plan and implement lessons
              following school’s curriculum, goals, objectives and philosophies.
            </p>
          </div>
        </Zoom>
        <Zoom duration={1500}>
          <div className="experience-card">
            <h3 className="experience-title">Software Engineering (Intern)</h3>
            <h5 className="experience-subtitle">
              Hi-Health Technology Co. <span>(2019/7 - 2020/1)</span>
            </h5>
            <p className="experience-text">
              Collaborated with software engineers to develop and test
              application procedures.
            </p>
          </div>
        </Zoom>
        <Zoom duration={2000}>
          <div className="experience-card">
            <h3 className="experience-title">
              Customer Support Associate (Part-Time)
            </h3>
            <h5 className="experience-subtitle">
              National Taiwan University Computer and Information Networking
              Center <span>(2016/2 - 2020/1)</span>
            </h5>
            <p className="experience-text">
              Explained complex technology-related issues in understandable
              terms user. Used remote diagnostic tools to identify sources of
              certain user issues
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Experience;
