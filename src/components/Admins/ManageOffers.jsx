import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageOffer.css";

const ManageOffers = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getoffers/");
        setOffers(response.data);
      } catch (error) {
        toast.error("Error fetching offers.");
        console.error(error);
      }
    };
    fetchOffers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await axios.delete(`http://localhost:8000/offer/${id}`);
        setOffers(offers.filter((offer) => offer._id !== id));
        toast.success("Offer deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete offer.");
        console.error(error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-offer/${id}`);
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
        <h2>Manage Offers</h2>
        <div className="offers-container">
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div key={offer._id} className="offer-card">
                <img src={offer.image_url} alt={offer.OfferName} className="offer-image" />
                <div className="offer-info">
                  <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
                  <p><strong>Description:</strong> {offer.Description}</p>
                  <div className="offer-buttons">
                    <button className="delete-button" onClick={() => handleDelete(offer._id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                    <button className="update-button" onClick={() => handleUpdate(offer._id)}>
                      <FontAwesomeIcon icon={faEdit} /> Update
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No offers available.</p>
          )}
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default ManageOffers;