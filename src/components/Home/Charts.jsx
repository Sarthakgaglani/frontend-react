import React from "react";
import "./Charts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


const Charts = () => {
  const navigate = useNavigate();

  // Simulated authentication (Replace with real authentication logic)
  const isAuthenticated = localStorage.getItem("user") ? true : false;

  // Handle navigation with login check
  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      toast.warning("Please log in or sign up first!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Hindi","Gujarati", "Arabic", "Portuguese", "Bengali", "Russian",
    "Japanese", "Punjabi", "Korean", "Italian", "Turkish", "Dutch", "Swedish", "Greek", "Hebrew", "Thai",
    "Vietnamese", "Polish", "Czech", "Danish", "Finnish", "Hungarian", "Norwegian", "Romanian", "Slovak",
    "Ukrainian", "Malay", "Indonesian", "Filipino", "Persian", "Urdu", "Swahili", "Tamil", "Telugu", "Marathi"
  ];

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Spain", "Italy", "China",
    "Japan", "South Korea", "Brazil", "Mexico", "Russia", "South Africa", "Indonesia", "Saudi Arabia", "Turkey",
    "Netherlands", "Sweden", "Switzerland", "Norway", "Denmark", "Finland", "Poland", "Greece", "Thailand",
    "Vietnam", "Argentina", "Chile", "Colombia", "Egypt", "Nigeria", "Pakistan", "Bangladesh", "Malaysia"
  ];
  const categoryData = [
    { name: "Street Food", value: 45 },
    { name: "Restaurant Deals", value: 30 },
    { name: "Top Offers", value: 25 },
  ];
  
  const COLORS = ["#FF8042", "#00C49F", "#0088FE"];
  
  

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        {/* Navigation Bar inside Hero Section */}
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/contact" className="nav-item">Contact Us</Link>
            <Link to="/login" className="nav-item">Log in</Link>
            <Link to="/signup" className="nav-item">Sign up</Link>
          </div>
          <div className="user-profile" style={{ width: "50px" }}>
            <a href="#" className="user-profile">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
        </nav>
        
        <h1 style={{ fontSize: "57px" }}>Pocket Buddy</h1>
        <p style={{ fontSize: "18px" }}>Find the best street food & restaurant deals near you!</p>
      </div>

      {/* Categories */}
      <div className="categories">
        <h2>Explore</h2>
        <div className="category-list">
          <div className="category-card category-offers">
            <button onClick={() => handleNavigation("/topdeals")} className="category-card category-offers">
              🍴 Top Offers
            </button>
          </div>
          <div className="category-card category-streetfood">
            <button onClick={() => handleNavigation("/foodstalls")} className="category-card category-streetfood">
              🌮 Indian Food
            </button>
          </div>
          <div className="category-card category-deals">
            <button onClick={() => handleNavigation("/deals")} className="category-card category-deals">
              🎁 Deals
            </button>
          </div>
        </div>
      </div>
      <div className="chart-section">
  <h2>Popular Categories</h2>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={categoryData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>


      {/* Sections for Footer Navigation */}
      <div id="who-we-are" className="section">
        <h2>Who We Are</h2>
        <p>
          We are a team dedicated to bringing you the best street food and restaurant deals!
          Pocket Buddy is your go-to platform for discovering the best street food and restaurant deals. 
          Our mission is to bridge the gap between small food stalls and food lovers by providing a space where users 
          can find, review, and support local vendors. We believe in making food accessible, affordable, and exciting for everyone.
        </p>
      </div>

      <div id="blogs" className="section">
        <h2>Blogs</h2>
        <p>
          Read the latest updates about food trends and deals.
          Stay updated with the latest trends in the food industry, get tips on finding the best local cuisines, 
          and read inspiring stories of food stall owners who have made a mark in their communities. 
          Our blogs feature expert opinions, user experiences, and food explorations that will make your food journey even more delicious.
        </p>
      </div>

      <div id="features" className="section">
        <h2>Features</h2>
        <p>Discover the unique features of Pocket Buddy.</p>
      </div>

      <div id="community" className="section">
        <h2>Community</h2>
        <p>
          Join a growing community of food lovers, street vendors, and restaurant owners. 
          Share your experiences, leave reviews, recommend hidden gems, and participate in exclusive events. 
          Pocket Buddy is more than just a food platform; it’s a movement that connects people through their love for food.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <a href="#who-we-are" className="footer-link">Who We Are</a>
          <a href="#blogs" className="footer-link">Blogs</a>
          <a href="#features" className="footer-link">Features</a>
          <a href="#community" className="footer-link">Community</a>
        </div>

        <p className="footer-copyright">&copy; 2025 All rights reserved.</p>

        <div className="footer-right">
          <select className="language-dropdown">
            {languages.map((lang, index) => (
              <option key={index} value={lang.toLowerCase()}>{lang}</option>
            ))}
          </select>
          <select className="country-dropdown">
            {countries.map((country, index) => (
              <option key={index} value={country.toLowerCase()}>{country}</option>
            ))}
          </select>
        </div>
        
        <div className="footer-icons">
          <a href="#" className="social-icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>           
          <a href="#" className="social-icon twitter">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </footer>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export { Charts };
