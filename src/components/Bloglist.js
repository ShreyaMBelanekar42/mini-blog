import React from "react";
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <>
      <div className="content">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <div className="blog-preview-details">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
            <button className="view-blog">
              <Link to={`/blogs/${blog.id}`} className="view-blog-link">
                View Blog
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bloglist;
