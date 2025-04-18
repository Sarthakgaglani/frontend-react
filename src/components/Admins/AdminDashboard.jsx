// import React from 'react';
// import Sidebar from './Sidebar';
// // import Navbar from './Navbar';
// import { Routes, Route } from 'react-router-dom';
// import ManageOffers from './ManageOffers';
// import ManageRestaurants from './ManageRestaurants';
// import ManageUsers from './ManageUsers';
// import DashboardCharts from './DashboardCharts';
// import './Admin.css';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-container">
//       <Sidebar />
//       {/* <div className="admin-main">
//         <Navbar /> */}
//         <div className="admin-content">
//           <Routes>
//           <Route index element={<DashboardCharts />} /> {/* Show charts when on /admin */}
//             <Route path="/offers" element={<ManageOffers />} />
//             <Route path="/restaurants" element={<ManageRestaurants />} />
//             <Route path="/users" element={<ManageUsers />} />
//           </Routes>
//         </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export {AdminDashboard};

import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Admin.css';

// Main AdminDashboard Component
const AdminDashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [userTrendData, setUserTrendData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [totalOffers, setTotalOffers] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [offersRes, usersRes, restaurantsRes] = await Promise.all([
          axios.get('http://localhost:8000/getoffers/'),
          axios.get('http://localhost:8000/users/'),
          axios.get('http://localhost:8000/getRestaurant/'),
        ]);

        const offers = offersRes.data;
        const users = usersRes.data;
        const restaurants = restaurantsRes.data;

        const actualUsers = users.filter(user => user.role === 'User');
        setTotalUsers(actualUsers.length);
        setTotalRestaurants(restaurants.length);
        setTotalOffers(offers.length);

        const groupedOffers = offers.reduce((acc, offer) => {
          const name = offer.restaurant?.Name;
          if (!acc[name]) acc[name] = 0;
          acc[name]++;
          return acc;
        }, {});
        const formattedOffers = Object.entries(groupedOffers).map(([name, offers]) => ({
          name,
          offers,
        }));
        setChartData(formattedOffers);

        const groupedUsers = actualUsers.reduce((acc, user) => {
          if (!user.created_at) return acc;
          const dateObj = new Date(user.created_at);
          if (isNaN(dateObj.getTime())) return acc;
          const month = dateObj.toLocaleString('default', { month: 'short', year: 'numeric' });
          if (!acc[month]) acc[month] = 0;
          acc[month]++;
          return acc;
        }, {});
        const formattedUsers = Object.entries(groupedUsers).map(([month, count]) => ({
          month,
          users: count,
        }));
        setUserTrendData(formattedUsers);
      } catch (err) {
        console.error('Dashboard data fetch failed:', err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>ADMIN PANEL</h2>
        <nav>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
          <Link to="/offers">Manage Offers</Link>
        <Link to="/restaurants">Manage Restaurants</Link>
        <Link to="/users">Manage Users</Link>
        </nav>
      </div>

      <div className="admin-main">
        <div className="dashboard-container">
          <div className="welcome-section">
            <span>Welcome, Admin</span>
            <FontAwesomeIcon icon={faHome} className="icon" />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>

          <div className="summary-cards">
            <div className="card blue">
              <div className="card-text">
                <h4>Total Users</h4>
                <h2>{totalUsers}</h2>
              </div>
            </div>
            <div className="card green">
              <div className="card-text">
                <h4>Total Restaurants</h4>
                <h2>{totalRestaurants}</h2>
              </div>
            </div>
            <div className="card orange">
              <div className="card-text">
                <h4>Total Offers</h4>
                <h2>{totalOffers}</h2>
              </div>
            </div>
          </div>

          <div className="chart-container">
            <h2>Offers Per Restaurant</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="offers" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container">
            <h2>User Growth Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#1cc88a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };