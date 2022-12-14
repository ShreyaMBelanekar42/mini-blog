import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      {error && <div className="error-text">{error}</div>}
      {loading && <div className="loading-text">Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </>
  );
};

export default Home;
