import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "katex/dist/katex.min.css";
import "./styles/UpdatePost.css";

const CreatePost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0);
  const [text, setText] = useState("");
  const params = useParams();

  const updatePost = () => {
    if (
      username === "" ||
      password === "" ||
      title === "" ||
      date === 0 ||
      text === ""
    ) {
      alert("Please fill in all blank.");
    } else {
      Axios.put(
        `https://web-portfolio-2-blog.herokuapp.com/updatePost/${params.id}`,
        {
          username,
          password,
          title,
          date,
          text,
        }
      )
        .then((response) => {
          alert(response.data);
        })
        .catch((e) => {
          alert(e.response.data);
        });
    }
  };

  useEffect(() => {
    Axios.get(
      `https://web-portfolio-2-blog.herokuapp.com/getPost/${params.id}`
    ).then((response) => {
      setTitle(response.data.title);
      setDate(response.data.date);
      setText(response.data.text);
    });
  }, [params.id]);

  return (
    <div className="update-post">
      <Nav />
      <div className="update-post-input">
        <textarea
          autoFocus
          placeholder="Write here..."
          className="update-post-textarea"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <ReactMarkdown
          className="update-post-markdown"
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
      <div className="update-post-form">
        <div className="update-post-form-one">
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />
          <input
            type="number"
            placeholder="Date..."
            value={date}
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
        <button onClick={updatePost}>Update Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
