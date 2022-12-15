import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>This page in not available</p>
        <Link to="/" className='not-found-link'>Back to Homepage</Link>
    </div>
  )
}

export default NotFound;