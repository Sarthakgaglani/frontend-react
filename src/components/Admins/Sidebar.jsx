import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <Link to="/offers">Manage Offers</Link>
        <Link to="/restaurants">Manage Restaurants</Link>
        <Link to="/users">Manage Users</Link>
      </nav>
    </div>
  );
};

export default Sidebar;