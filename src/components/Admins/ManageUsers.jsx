import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageUsers.css"; // New CSS file for ManageUsers

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/"); // Adjust endpoint as needed
        // Filter users to show only those with role === "User"
        const filteredUsers = response.data.filter(user => user.role === "User");
        setUsers(filteredUsers);
      } catch (error) {
        toast.error("Error fetching users.");
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:8000/user/${id}`); // Adjust endpoint as needed
        setUsers(users.filter((user) => user._id !== id));
        toast.success("User deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete user.");
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
        <h2>Manage Users</h2>
        <div className="users-container">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="user-card">
                <div className="user-info">
                  <h3>{user.firstName} {user.lastName}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Age:</strong> {user.age}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  <div className="user-buttons">
                    <button className="delete-button" onClick={() => handleDelete(user._id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default ManageUsers;