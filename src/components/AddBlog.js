import React, { useState } from 'react'

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, author, body};
    console.log(blog);
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

        <button>Add Blog</button>
        <p>{title}</p>
        <p>{author}</p>
        <p>{body}</p>
      </form>
    </div>

  )
}

export default AddBlog;