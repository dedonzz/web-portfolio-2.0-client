import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import Nav from "../components/Nav";
import Foot from "../components/Foot";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "katex/dist/katex.min.css";
import "./styles/BlogPost.css";

const Blog = () => {
  const [post, setPost] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const editPost = () => {
    alert("Developing...");
  };

  const deletePost = () => {
    if (username === "" || password === "") {
      alert("Please fill in all blank.");
    } else {
      Axios.delete(
        `https://web-portfolio-2-blog.herokuapp.com/getPost/${params.id}/delete`,
        {
          data: {
            username: username,
            password: password,
          },
        }
      )
        .then((response) => alert(response.data))
        .then(navigate("../blog"))
        .catch((e) => {
          alert(e.response.data);
        });
    }
  };

  useEffect(() => {
    Axios.get(
      `https://web-portfolio-2-blog.herokuapp.com/getPost/${params.id}`
    ).then((response) => {
      setPost(response.data);
    });
  }, [params.id]);

  return (
    <div className="blog-post">
      <Nav />

      <div className="blog-post-container">
        <div className="blog-post-card">
          <div className="blog-post-title">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
          </div>
          <div className="blog-post-markdown">
            <ReactMarkdown
              children={post.text}
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
        </div>
      </div>
      <div className="blog-post-delete">
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
        <button onClick={deletePost}>delete post</button>
        <button onClick={editPost}>edit post</button>
      </div>
      <Foot />
    </div>
  );
};

export default Blog;
