import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/Nav.css";

const Nav = () => {
  const [navExpand, setNavExpand] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Don WCJ
      </Link>
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
            <Link to="/project">Project</Link>
          </li>
          <li className="nav-listb">
            <Link to="/blog">Blog</Link>
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
