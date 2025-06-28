import React from 'react'
import { useState, useEffect } from 'react'
const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.userId }</p>
            <p>{post.body}</p>
          </li>
        ))}
    </ul>
    </>
  )
}

export default PostList