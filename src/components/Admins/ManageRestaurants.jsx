import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Only including faTrash for deletion
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageRestaurant.css"; // Reusing the existing CSS file for now

const ManageRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getRestaurant/"); // Adjust endpoint as needed
        setRestaurants(response.data);
      } catch (error) {
        toast.error("Error fetching restaurants.");
        console.error(error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      try {
        await axios.delete(`http://localhost:8000/restaurant/${id}`); // Adjust endpoint as needed
        setRestaurants(restaurants.filter((restaurant) => restaurant._id !== id));
        toast.success("Restaurant deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete restaurant.");
        console.error(error);
      }
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>ADMIN PANEL</h2>
        <nav>
          <a href="/admin" className="active">Dashboard</a>
          <a href="/offers">Manage Offers</a>
          <a href="/restaurants">Manage Restaurants</a>
          <a href="/users">Manage Users</a>
        </nav>
      </div>
      <div className="admin-main">
        <h2>Manage Restaurants</h2>
        <div className="offers-container">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div key={restaurant._id} className="offer-card">
                {/* <img src={restaurant.image_url || "default-image.jpg"} alt={restaurant.Name} className="offer-image" /> */}
                <div className="offer-info">
                  <h3>{restaurant.Name}</h3>
                  <p><strong>Category:</strong> {restaurant.Category}</p>
                  <p><strong>State:</strong> {restaurant.state}</p>
                  <p><strong>City:</strong> {restaurant.city}</p>
                  <div className="offer-buttons">
                    <button className="delete-button" onClick={() => handleDelete(restaurant._id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No restaurants available.</p>
          )}
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default ManageRestaurants;