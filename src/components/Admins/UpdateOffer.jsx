import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UpdateOffer.css";

const UpdateOffer = () => {
  const { id } = useParams(); // Get Offer ID from URL
  const [offerDetails, setOfferDetails] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch Offer Details when the page loads
  useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get_offerBy_id/${id}`);
        setOfferDetails(response.data);
      } catch (error) {
        toast.error("Error fetching offer details.");
        console.error(error);
      }
    };
    fetchOfferDetails();
  }, [id]);

  // Enable Editing
  const enableEditing = () => setIsEditable(true);

  // Handle Input Change
  const handleInputChange = (e) => {
    setOfferDetails({ ...offerDetails, [e.target.name]: e.target.value });
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpdateOffer = async () => {
    try {
      const formData = new FormData();
      formData.append("OfferName", offerDetails.OfferName);
      formData.append("Description", offerDetails.Description);
      formData.append("Discount", offerDetails.Discount);
      formData.append("StartDate", new Date(offerDetails.StartDate).toISOString());
      formData.append("EndDate", new Date(offerDetails.EndDate).toISOString());
      formData.append("location_id", offerDetails.location_id);
      formData.append("restaurant_id", offerDetails.restaurant_id);
      formData.append("FoodType", offerDetails.FoodType);

      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      const response = await axios.put(`http://localhost:8000/offer/${id}`, formData);
      
      if (response.status === 200 || response.status === 201) {  
        toast.success("Offer updated successfully!", { position: "top-center", autoClose: 2000 });
        setOfferDetails(response.data); // Update state with the latest data
        setIsEditable(false);
      } else {
        toast.error(`Failed to update offer. Status: ${response.status}`);
      }
    } catch (error) {
      toast.error("Failed to update offer.");
      console.error(error);
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
        <h2>Update Offer</h2>
        <div className="offer-management">
          {offerDetails ? (
            <div className="offer-form">
              <label>Offer Name:</label>
              <input
                type="text"
                name="OfferName"
                value={offerDetails.OfferName}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>Description:</label>
              <input
                type="text"
                name="Description"
                value={offerDetails.Description}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>Discount:</label>
              <input
                type="number"
                name="Discount"
                value={offerDetails.Discount}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>Start Date:</label>
              <input
                type="datetime-local"
                name="StartDate"
                value={offerDetails.StartDate ? new Date(offerDetails.StartDate).toISOString().slice(0, 16) : ""}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>End Date:</label>
              <input
                type="datetime-local"
                name="EndDate"
                value={offerDetails.EndDate ? new Date(offerDetails.EndDate).toISOString().slice(0, 16) : ""}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>Food Type:</label>
              <input
                type="text"
                name="FoodType"
                value={offerDetails.FoodType}
                onChange={handleInputChange}
                disabled={!isEditable}
              />

              <label>Image:</label>
              <input type="file" name="image" onChange={handleImageChange} disabled={!isEditable} />

              <br />
              <button onClick={enableEditing}>Edit</button>
              <button onClick={handleUpdateOffer} disabled={!isEditable}>
                Update Offer
              </button>
            </div>
          ) : (
            <p>Loading offer details...</p>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateOffer;