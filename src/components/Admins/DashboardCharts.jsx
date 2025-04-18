// // // DashboardCharts.jsx
// // import React from 'react';
// // import {
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// // } from 'recharts';

// // const data = [
// //   { name: 'Street Chow', offers: 4 },
// //   { name: 'Samosa King', offers: 7 },
// //   { name: 'Dragon Wok', offers: 5 },
// //   { name: 'Roll House', offers: 3 },
// // ];

// // const DashboardCharts = () => {
// //   return (
// //     <div>
// //       <h2>Offers Per Restaurant</h2>
// //       <ResponsiveContainer width="100%" height={300}>
// //         <BarChart data={data}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="name" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Bar dataKey="offers" fill="#3498db" />
// //         </BarChart>
// //       </ResponsiveContainer>
// //     </div>
// //   );
// // };

// // export default DashboardCharts;
// import React, { useEffect, useState } from 'react';
// import {
//   BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import axios from 'axios';
// import './Admin.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';

// const DashboardCharts = () => {
//   const [chartData, setChartData] = useState([]);
//   const [userTrendData, setUserTrendData] = useState([]);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalRestaurants, setTotalRestaurants] = useState(0);
//   const [totalOffers, setTotalOffers] = useState(0);

//   // useEffect(() => {
//   //   const fetchDashboardData = async () => {
//   //     try {
//   //       const [offersRes, usersRes, restaurantsRes] = await Promise.all([
//   //         axios.get('http://localhost:8000/getoffers/'),
//   //         axios.get('http://localhost:8000/users/'),
//   //         axios.get('http://localhost:8000/getRestaurant/'),
//   //       ]);

//   //       const offers = offersRes.data;
//   //       const users = usersRes.data;
//   //       const restaurants = restaurantsRes.data;
//   //       console.log(offers.data, users.data, restaurants.data)

//   //       setTotalUsers(users.length);
//   //       setTotalRestaurants(restaurants.length);
//   //       setTotalOffers(offers.length);

//   //       // Offers per restaurant
//   //       const groupedOffers = offers.reduce((acc, offer) => {
//   //         const name = offer.restaurant?.Name;
//   //         if (!acc[name]) acc[name] = 0;
//   //         acc[name]++;
//   //         return acc;
//   //       }, {});
//   //       const formattedOffers = Object.entries(groupedOffers).map(([name, offers]) => ({
//   //         name,
//   //         offers,
//   //       }));
//   //       setChartData(formattedOffers);

//   //       // Users over time
//   //       const groupedUsers = users.reduce((acc, user) => {
//   //         const date = new Date(user.created_at);
//   //         const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });
//   //         if (!acc[month]) acc[month] = 0;
//   //         acc[month]++;
//   //         return acc;
//   //       }, {});
        
//   //       const formattedUsers = Object.entries(groupedUsers).map(([month, count]) => ({
//   //         month,
//   //         users: count,
//   //       }));
//   //       setUserTrendData(formattedUsers);
//   //     } catch (err) {
//   //       console.error('Dashboard data fetch failed:', err);
//   //     }
//   //   };

//   //   fetchDashboardData();
//   // }, []);
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [offersRes, usersRes, restaurantsRes] = await Promise.all([
//           axios.get('http://localhost:8000/getoffers/'),
//           axios.get('http://localhost:8000/users/'),
//           axios.get('http://localhost:8000/getRestaurant/'),
//         ]);
  
//         const offers = offersRes.data;
//         const users = usersRes.data;
//         const restaurants = restaurantsRes.data;
//         console.log(offers.data, users.data, restaurants.data)
  
//         // ✅ Filter only users with role = 'user'
//         const actualUsers = users.filter(user => user.role === 'User');
  
//         setTotalUsers(actualUsers.length); // ✅ Only count actual users
//         setTotalRestaurants(restaurants.length);
//         setTotalOffers(offers.length);
  
//         // ✅ Offers per restaurant
//         const groupedOffers = offers.reduce((acc, offer) => {
//           const name = offer.restaurant?.Name;
//           if (!acc[name]) acc[name] = 0;
//           acc[name]++;
//           return acc;
//         }, {});
//         const formattedOffers = Object.entries(groupedOffers).map(([name, offers]) => ({
//           name,
//           offers,
//         }));
//         setChartData(formattedOffers);
  
//         // ✅ User growth over time (only real users)
//         const groupedUsers = actualUsers.reduce((acc, user) => {
//           if (!user.created_at) return acc;
//           const dateObj = new Date(user.created_at);
//           if (isNaN(dateObj.getTime())) return acc;
  
//           const month = dateObj.toLocaleString('default', { month: 'short', year: 'numeric' });
//           if (!acc[month]) acc[month] = 0;
//           acc[month]++;
//           return acc;
//         }, {});
  
//         const formattedUsers = Object.entries(groupedUsers).map(([month, count]) => ({
//           month,
//           users: count,
//         }));
//         setUserTrendData(formattedUsers);
  
//       } catch (err) {
//         console.error('Dashboard data fetch failed:', err);
//       }
//     };
  
//     fetchDashboardData();
//   }, []);
  

//   return (
//     <div className="dashboard-container" style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
//       {/* Top-right Welcome Admin + Icons */}
//       <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20px' }}>
//         <span style={{ fontSize: '16px', marginRight: '10px' }}>Welcome, Admin</span>
//         <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px', cursor: 'pointer' }} />
//         <FontAwesomeIcon icon={faUser} />
//       </div>

//       {/* All content wrapper */}
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
//         {/* Summary Cards */}
//         <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
//           <div style={{ background: '#4e73df', color: 'white', padding: '20px', borderRadius: '10px', flex: 1 }}>
//             <h4>Total Users</h4>
//             <h2>{totalUsers}</h2>
//           </div>
//           <div style={{ background: '#1cc88a', color: 'white', padding: '20px', borderRadius: '10px', flex: 1 }}>
//             <h4>Total Restaurants</h4>
//             <h2>{totalRestaurants}</h2>
//           </div>
//           <div style={{ background: '#f6c23e', color: 'white', padding: '20px', borderRadius: '10px', flex: 1 }}>
//             <h4>Total Offers</h4>
//             <h2>{totalOffers}</h2>
//           </div>
//         </div>

//         {/* Bar Chart */}
//         <div style={{ width: '100%' }}>
//           <h2>Offers Per Restaurant</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="offers" fill="#3498db" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart */}
//         <div style={{ width: '100%' }}>
//           <h2>User Growth Over Time</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={userTrendData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="users" stroke="#1cc88a" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;


