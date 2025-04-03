
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";

// const ManageOffer = () => {
//   const { id,offerId,offerID } = useParams(); // Get Offer ID from URL
//   const [offerDetails, setOfferDetails] = useState(null);
//   const [isEditable, setIsEditable] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { setValue } = useForm(); 
//   const [restaurants, setRestaurants] = useState([]);
//   const [locations, setLocations] = useState([]);

//   // Fetch Offer Details when the page loads
//   useEffect(() => {
//     const fetchOfferDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/get_offerBy_id/${id}`);
//         console.log(response.data);
//         setOfferDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching offer details:", error);
//       }
//     };
//     fetchOfferDetails();
//   }, [id]);
//   const getRestaurantById = async (offerId) => {
//     try {
//       const res = await axios.get(`/getRestaurantById/{restaurant_id}`); // Adjust the URL as needed
//       console.log(res.data);
//       setRestaurants(res.data);
//     } catch (error) {
//       console.error("Error fetching restaurant:", error);
//     }
//   };

//   const getLocationById = async (offerId) => {
//     try {
//       const res = await axios.get(`/locations/getlocationById/${offerId}`); // Adjust the URL if necessary
//       console.log(res.data);
//       setLocations(res.data);
//     } catch (error) {
//       console.error("Error fetching location:", error);
//     }
//   };

//   useEffect(() => {
//     if (offerId) {
//       getRestaurantById(offerId); // Fetch restaurant based on offer ID
//       getLocationById(offerId); // Fetch location based on offer ID
//     }
//   }, [offerId]);
  

//   // Enable Editing
//   const enableEditing = () => setIsEditable(true);

//   // Handle Input Change
//   const handleInputChange = (e) => {
//     setOfferDetails({ ...offerDetails, [e.target.name]: e.target.value });
//   };

//   // Handle Image Change
//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]);
//   };


//   const handleUpdateOffer = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("OfferName", offerDetails.OfferName);
//       formData.append("Description", offerDetails.Description);
//       formData.append("Discount", offerDetails.Discount);
//       formData.append("StartDate", offerDetails.StartDate);
//       formData.append("EndDate", offerDetails.EndDate);
//       formData.append("location_id", offerDetails.location_id);
//       formData.append("restaurant_id", offerDetails.restaurant_id);
//       formData.append("FoodType", offerDetails.FoodType);
  
//       if (selectedImage) {
//         formData.append("image", selectedImage);
//       }
  
      
//       const response = await axios.put(`http://localhost:8000/offer/${id}`, formData);
//       console.log(response.data);
  
//       if (response.status === 200 || response.status === 201) {  // 201 for successful updates
//         alert("Offer updated successfully!");
//         setOfferDetails(response.data);
//         setIsEditable(false);
//       } else {
//         alert(`Failed to update offer. Status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error updating offer:", error);
//       alert("Failed to update offer.");
//     }
//   };
  
  

//   return (
//     <div>
//       <h2>Update Offer</h2>

//       {/* Show Offer Details if Available */}
//       {offerDetails ? (
//         <div>
//           <h3>Offer Details</h3>
//           <label>Offer Name:</label>
//           <input
//             type="text"
//             name="OfferName"
//             value={offerDetails.OfferName}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />

//           <label>Description:</label>
//           <input
//             type="text"
//             name="Description"
//             value={offerDetails.Description}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />

//           <label>Discount:</label>
//           <input
//             type="number"
//             name="Discount"
//             value={offerDetails.Discount}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />

//           <label>Start Date:</label>
//           <input
//             type="datetime-local"
//             name="StartDate"
//             value={offerDetails.StartDate}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />

//           <label>End Date:</label>
//           <input
//             type="datetime-local"
//             name="EndDate"
//             value={offerDetails.EndDate}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />
          

//           <label>Food Type:</label>
//           <input
//             type="text"
//             name="FoodType"
//             value={offerDetails.FoodType}
//             onChange={handleInputChange}
//             disabled={!isEditable}
//           />

//           <label>Image:</label>
//           <input type="file" name="image" onChange={handleImageChange} disabled={!isEditable} />

//           <br />
//           <button onClick={enableEditing}>Edit</button>
//           <button onClick={handleUpdateOffer} disabled={!isEditable}>
//             Update Offer
//           </button>
//         </div>
//       ) : (
//         <p>Loading offer details...</p>
//       )}
//     </div>
//   );
// };

// export { ManageOffer };


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useParams, Link } from "react-router-dom";
// import "./ManageOffer.css";

// const ManageOffer = () => {
//   const { id, offerId } = useParams(); // Get Offer ID from URL
//   const [offerDetails, setOfferDetails] = useState(null);
//   const [isEditable, setIsEditable] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { setValue } = useForm(); 
//   const [restaurants, setRestaurants] = useState([]);
//   const [locations, setLocations] = useState([]);

//   // Fetch Offer Details when the page loads
//   useEffect(() => {
//     const fetchOfferDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/get_offerBy_id/${id}`);
//         console.log(response.data);
//         setOfferDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching offer details:", error);
//       }
//     };
//     fetchOfferDetails();
//   }, [id]);

//   // Enable Editing
//   const enableEditing = () => setIsEditable(true);

//   // Handle Input Change
//   const handleInputChange = (e) => {
//     setOfferDetails({ ...offerDetails, [e.target.name]: e.target.value });
//   };

//   // Handle Image Change
//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]);
//   };

//   const handleUpdateOffer = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("OfferName", offerDetails.OfferName);
//       formData.append("Description", offerDetails.Description);
//       formData.append("Discount", offerDetails.Discount);
//       formData.append("StartDate", offerDetails.StartDate);
//       formData.append("EndDate", offerDetails.EndDate);
//       formData.append("location_id", offerDetails.location_id);
//       formData.append("restaurant_id", offerDetails.restaurant_id);
//       formData.append("FoodType", offerDetails.FoodType);

//       if (selectedImage) {
//         formData.append("image", selectedImage);
//       }

//       const response = await axios.put(`http://localhost:8000/offer/${id}`, formData);
//       console.log(response.data);

//       if (response.status === 200 || response.status === 201) {  
//         alert("Offer updated successfully!");
//         setOfferDetails(response.data);
//         setIsEditable(false);
//       } else {
//         alert(`Failed to update offer. Status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error updating offer:", error);
//       alert("Failed to update offer.");
//     }
//   };

//   return (
//     <div className="manage-offer-container">
      
//       {/* Hero Section */}
//       <div className="hero">
//         <nav className="navbar">
//           <div className="nav-links">
//             <Link to="/home" className="nav-item">Home</Link>
//             <Link to="/topdeals" className="nav-item">All Offers</Link>
//             <Link to="/manage-offers" className="nav-item">Manage Offers</Link>
//           </div>
//         </nav>
//         <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//         <h3 className="hero-title">Admin Panel</h3>
//         <p className="hero-subtitle" style={{ fontSize: "18px" }}>
//           Find the best street food & restaurant deals near you
//         </p>
//       </div>

//       {/* Offer Management Section */}
//       <div className="offer-management">
//         <h2>Update Offer</h2>

//         {offerDetails ? (
//           <div className="offer-form">
//             <label>Offer Name:</label>
//             <input
//               type="text"
//               name="OfferName"
//               value={offerDetails.OfferName}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>Description:</label>
//             <input
//               type="text"
//               name="Description"
//               value={offerDetails.Description}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>Discount:</label>
//             <input
//               type="number"
//               name="Discount"
//               value={offerDetails.Discount}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>Start Date:</label>
//             <input
//               type="datetime-local"
//               name="StartDate"
//               value={offerDetails.StartDate}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>End Date:</label>
//             <input
//               type="datetime-local"
//               name="EndDate"
//               value={offerDetails.EndDate}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>Food Type:</label>
//             <input
//               type="text"
//               name="FoodType"
//               value={offerDetails.FoodType}
//               onChange={handleInputChange}
//               disabled={!isEditable}
//             />

//             <label>Image:</label>
//             <input type="file" name="image" onChange={handleImageChange} disabled={!isEditable} />

//             <br />
//             <button onClick={enableEditing}>Edit</button>
//             <button onClick={handleUpdateOffer} disabled={!isEditable}>
//               Update Offer
//             </button>
//           </div>
//         ) : (
//           <p>Loading offer details...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export { ManageOffer };


import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageOffer.css";

const ManageOffer = () => {
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
    <div className="manage-offer-container">
      {/* Hero Section */}
      <div className="hero">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/topdeals" className="nav-item">All Offers</Link>
            <Link to="/manage-offers" className="nav-item">Manage Offers</Link>
          </div>
        </nav>
        <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
        <h3 className="hero-title">Admin Panel</h3>
        <p className="hero-subtitle" style={{ fontSize: "18px" }}>
          Find the best street food & restaurant deals near you
        </p>
      </div>

      {/* Offer Management Section */}
      <div className="offer-management">
        <h2>Update Offer</h2>

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

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export { ManageOffer };

    
