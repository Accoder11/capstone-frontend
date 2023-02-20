import React from 'react';
import { Route, Link } from 'react-router-dom';
import PostList from '../../Components/PostList';
import Comments from './Comments';
import Users from './Users';
import Dashboard from './Dashboard';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/blog-posts">Blog Posts</Link></li>
          <li><Link to="/admin/comments">Comments</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/blog-posts" component={PostList} />
        <Route exact path="/admin/comments" component={Comments} />
        <Route exact path="/admin/users" component={Users} />
      </main>
    </div>
  );
}

export default AdminDashboard;
