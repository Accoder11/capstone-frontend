
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:8000/api/posts/${match.params.id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [match.params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main container">
      <h3 className="section_title">{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default PostDetail;