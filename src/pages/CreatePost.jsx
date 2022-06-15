import React from "react";
import { useState } from "react";
import Axios from "axios";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "katex/dist/katex.min.css";
import "./styles/CreatePost.css";

const CreatePost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0);
  const [text, setText] = useState("");

  const createPost = () => {
    if (
      username === "" ||
      password === "" ||
      title === "" ||
      date === 0 ||
      text === ""
    ) {
      alert("Please fill in all blank.");
    } else {
      Axios.post("https://web-portfolio-2-blog.herokuapp.com/createPost", {
        username,
        password,
        title,
        date,
        text,
      })
        .then((response) => {
          alert("Post Created.");
        })
        .catch((e) => {
          alert(e.response.data);
        });
    }
  };

  return (
    <div className="create-post">
      <Nav />
      <div className="create-post-input">
        <textarea
          autoFocus
          placeholder="Write here..."
          className="create-post-textarea"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <ReactMarkdown
          className="create-post-markdown"
          children={text}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      <div className="create-post-form">
        <div className="create-post-form-one">
          <input
            type="text"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />
          <input
            type="number"
            placeholder="Date..."
            onChange={(event) => {
              setDate(event.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
