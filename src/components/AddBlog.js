import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, author, body};
    setIsLoading(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      history.push('/');
    })
  }

  return (
    <div className='add-blog'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog Author Name</label>
        <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>

        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>

  )
}

export default AddBlog;