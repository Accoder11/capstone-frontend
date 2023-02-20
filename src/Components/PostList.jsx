import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:8000/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main container'>
      <h3 className='section_title'>Latest Posts</h3>

      {posts.map((post) => (
        <div key={post.id} className='card'>
          <Link to={`/post/${post.id}`}>
            <h4 className='card-title'>{post.title}</h4>
          </Link>
          <p>{post.description}</p>
          <button className='btn btn-primary btn-sm' onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
