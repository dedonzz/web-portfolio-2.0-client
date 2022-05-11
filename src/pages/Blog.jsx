import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../components/Nav";
import "./styles/Blog.css";

const Blog = () => {
  const [listOfPosts, setListOfPosts] = useState([
    //{ title: "test", data: 2022, text: "test" },
  ]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getPost").then((response) => {
      console.log(response.data);
      setListOfPosts(response.data);
    });
  }, []);

  const createPost = () => {
    Axios.post("http://localhost:3001/createPost", {
      title,
      date,
      text,
    }).then((response) => {
      setListOfPosts([...listOfPosts, { title, date, text }]);
      alert("Post Updated");
    });
  };

  return (
    <div className="blog">
      <Nav />
      <div className="blog-display">
        {listOfPosts.map((post) => {
          return (
            <div>
              <h1>title: {post.title}</h1>
              <h1>date: {post.date}</h1>
              <h1>text: {post.text}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Date..."
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Text..."
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  );
};

export default Blog;
