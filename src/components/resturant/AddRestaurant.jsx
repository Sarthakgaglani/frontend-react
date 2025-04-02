import React, { useState } from "react";
import "./AddRestaurant.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddRestaurant = () => {

    return (
        <div className="home-container">
          {/* Hero Section */}
          <div className="hero">
            <nav className="navbar">
              <div className="nav-links">
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About Us</Link>
                <Link to="/contact" className="nav-item">Contact Us</Link>
                <Link to="/login" className="nav-item">Log in</Link>
                <Link to="/signup" className="nav-item">Sign up</Link>
              </div>
              <div className="user-profile">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </nav>
    
            <h1 className="hero-title">Pocket Buddy</h1>
            <p className="hero-subtitle">Find the best street food & restaurant deals near you!</p>
            <div className="search-bar">
              <input type="text" placeholder="Search for restaurants, stalls, or cuisines..." />
              <button>Search</button>
            </div>
          </div>
        </div>
    );
};
export { AddRestaurant};