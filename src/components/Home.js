import React, { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(res.ok !== true){
          throw Error('Could not fetch the data!!')
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      })
    }, 1000);
  }, []);

  return (
    <>
      {error && <div className="error-text">{error}</div>}
      {loading && <div className="loading-text">Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
    </>
  );
};

export default Home;
