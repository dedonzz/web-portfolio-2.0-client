import React from "react";
import { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import "./styles/Theme.css";

const Theme = () => {
  const [themeChange, setThemeChange] = useState(false);

  if (themeChange === false) {
    document.documentElement.style.setProperty(
      "--color-theme1",
      "rgba(224, 224, 224, 0.877)"
    );
    document.documentElement.style.setProperty("--color-theme2", "white");
    document.documentElement.style.setProperty("--color-theme3", "black");
    document.documentElement.style.setProperty(
      "--color-theme4",
      "rgba(0, 0, 0, 0.349)"
    );
    document.documentElement.style.setProperty(
      "--border-theme1",
      "1px solid rgba(0, 0, 0, 0.089)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--color-theme1",
      "rgba(224, 224, 224, 0.877)"
    );
    document.documentElement.style.setProperty("--color-theme2", "black");
    document.documentElement.style.setProperty("--color-theme3", "white");
    document.documentElement.style.setProperty("--color-theme4", "white");
    document.documentElement.style.setProperty(
      "--border-theme1",
      "1px solid white"
    );
  }

  return (
    <div className="theme">
      <div className="theme-text">Change Theme</div>
      <Bounce>
        <div
          className="theme-button"
          onClick={() => {
            setThemeChange(!themeChange);
          }}
        ></div>
      </Bounce>
    </div>
  );
};

export default Theme;
