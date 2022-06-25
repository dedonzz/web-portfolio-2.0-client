import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import CreatePost from "./pages/CreatePost";
import BlogPost from "./components/BlogPost";
import UpdatePost from "./pages/UpdatePost";
import "./Reset.css";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-232907943-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Routing = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="blog" element={<Blog />} />
        <Route path="project" element={<Project />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="blog/updatePost/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);
