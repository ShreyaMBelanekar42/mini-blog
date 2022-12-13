import React, { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
  }, []);

  return (
    <>
      {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
    </>
  );
};

export default Home;
