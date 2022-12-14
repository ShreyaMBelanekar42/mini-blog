import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
      <h1 className="title">WeBlog</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/addblog">Add Blog</Link>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Navbar;
