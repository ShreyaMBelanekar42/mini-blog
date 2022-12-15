import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blog, error, loading} = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div>
      {loading && <div className="loading-text">Loading...</div>}
      {error && <div className="error-text">{error}</div>}
      {blog && <div className="blog-body">
              <h2>{blog.title}</h2>
              <p className='author-p'>Written by {blog.author}</p>
              <p>{blog.body}</p>
              <button className="view-blog view-blog-link" onClick={handleClick}>
                Delete Blog
            </button>
      </div>}
    </div>
  )
}

export default BlogDetails;