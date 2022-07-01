import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Nav from "../components/Nav";
import Foot from "../components/Foot";
import Spinner from "../components/Spinner";
import Zoom from "react-reveal/Zoom";
import "./styles/Blog.css";

const Blog = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlog = async () => {
    try {
      await Axios.get(
        "https://web-portfolio-2-blog.herokuapp.com/getPost"
      ).then((response) => {
        setListOfPosts(response.data);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="blog">
      <Nav />
      <Zoom>
        <div className="blog-display">
          {loading ? (
            listOfPosts.map((post) => {
              return (
                <Link
                  to={`./${post._id}`}
                  className="blog-cards"
                  key={post._id}
                >
                  <h2>{post.title}</h2>
                  <h3>{post.date}</h3>
                  <p>{post.text}</p>
                </Link>
              );
            })
          ) : (
            <Spinner />
          )}
          {/* {listOfPosts.map((post) => {
            return (
              <Link to={`./${post._id}`} className="blog-cards" key={post._id}>
                <h2>{post.title}</h2>
                <h3>{post.date}</h3>
                <p>{post.text}</p>
              </Link>
            );
          })} */}
        </div>
      </Zoom>
      <Link to="../createPost" className="button">
        create new post
      </Link>
      <Foot />
    </div>
  );
};

export default Blog;
