import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./styles/Nav.css";

const Nav = () => {
  const [navExpand, setNavExpand] = useState(false);

  return (
    <div className="navbar">
      <a href="/" className="logo">
        Don WCJ
      </a>
      <ul className={navExpand ? "expand-nav" : "not-expand-nav"}>
        <div className="nav-list">
          <li className="nav-lista">
            <a href="#about">About</a>
          </li>
          <li className="nav-lista">
            <a href="#skill">Skill</a>
          </li>
          <li className="nav-lista">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-listb">
            <a href="/">Project</a>
          </li>
          <li className="nav-listb">
            <a href="/">Blog</a>
          </li>
        </div>
        <div
          onClick={() => {
            setNavExpand(!navExpand);
          }}
        >
          <AiOutlineMenu className="menu" size={30} />
          <AiOutlineClose className="menu-close" size={25} />
        </div>
      </ul>
    </div>
  );
};

export default Nav;
