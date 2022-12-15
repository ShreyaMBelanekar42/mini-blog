import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blog, error, loading} = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div>
      {loading && <div className="loading-text">Loading...</div>}
      {error && <div className="error-text">{error}</div>}
      {blog && <div className="blog-body">
              <h2>{blog.title}</h2>
              <p className='author-p'>Written by {blog.author}</p>
              <p>{blog.body}</p>
      </div>}
    </div>
  )
}

export default BlogDetails;