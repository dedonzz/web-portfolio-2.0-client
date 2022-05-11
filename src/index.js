import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import "./Reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blog" element={<Blog />} />
      <Route path="project" element={<Project />} />
    </Routes>
  </BrowserRouter>
);
