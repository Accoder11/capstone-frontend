import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer'
import Home from './pages/Home'
import Header from './Components/Header';
import Form from './Components/Form'
import PostList
from './Components/PostList';
import Post from './Components/PostDetail'
import FeaturedPost from './Components/FeaturedPost';
import PostDetail from './Components/PostDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<PostList />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />

      <Route exact path="/" element= {<Home/>} />
      <Route exact path="/featured" element={<FeaturedPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/form" element={<Form />} />
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
