import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import "./styles/About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-main">
        <div className="about-intro">
          <h2 className="about-title">
            Hi, <br />I am <span className="about_title-span">Don</span>
            <br />
            A Data Analyst,
            <br />
            Frontend Dev
          </h2>
          <a href="mailto: donwcj@gmail.com" className="about-button">
            Contact
          </a>
          <div className="about-social">
            <a
              href="https://www.linkedin.com/in/doncjwong/"
              className="about-social-icon"
            >
              <AiOutlineLinkedin size={25} />
            </a>
            <a href="https://github.com/dedonzz" className="about-social-icon">
              <AiOutlineGithub size={25} />
            </a>
          </div>
        </div>
        <img src="assets/perfil.png" className="about-img" alt="me-1" />
      </div>
      <Zoom duration={3000}>
        <div className="about-second">
          <img src="assets/about.png" alt="me-2" />
          <div className="about-second-intro">
            <h2 className="about-second-title">Hi, I'am Don Wong Chia Jiunn</h2>
            <p className="about-second-text">
              Malaysian. Currently staying in Taipei, Taiwan. <br />
              Taking a master's degree at National Taiwan University. <br />
              Majors in Statistics focuses on psychometrics analysis. <br />
              I am data enthusiast and frontend lover. <br />
              Very adaptable to new challenges.
              <br />
              Finally, a mindset of an athlete.
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
