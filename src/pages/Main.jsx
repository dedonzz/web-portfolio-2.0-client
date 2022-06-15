import React from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Skill from "../components/Skill";
import Foot from "../components/Foot";
import Theme from "../components/Theme";
import Zoom from "react-reveal/Zoom";
import "./styles/Main.css";

const Main = () => {
  return (
    <div>
      <Nav />
      <Zoom>
        <About />
        <Skill />
        <Experience />
      </Zoom>
      <Theme />
      <Foot />
    </div>
  );
};

export default Main;
