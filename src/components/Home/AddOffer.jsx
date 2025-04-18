// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./AddOffer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// const AddOffer = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [showOtherLocation, setShowOtherLocation] = useState(false);
//   const [showOtherRestaurant, setShowOtherRestaurant] = useState(false);
//   const [otherLocation, setOtherLocation] = useState("");
//   const [otherRestaurant, setOtherRestaurant] = useState("");
//   const navigate = useNavigate();

//   const getAllRestaurants = async () => {
//     try {
//       const res = await axios.get("/getRestaurant/");
//       setRestaurants(res.data);
//     } catch (error) {
//       toast.error("Failed to fetch restaurants.");
//       console.error(error);
//     }
//   };

//   const getAllLocations = async () => {
//     try {
//       const res = await axios.get("/locations/getLocations/");
//       setLocations(res.data);
//     } catch (error) {
//       toast.error("Failed to fetch locations.");
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getAllRestaurants();
//     getAllLocations();
//   }, []);

//   const { register, handleSubmit } = useForm();

//   const submitHandler = async (data) => {
//     try {
//       let finalLocationId = data.location_id;
//       let finalRestaurantId = data.restaurant_id;

//       // Handle new location
//       if (data.location_id === "other" && otherLocation.trim()) {
//         const locRes = await axios.post("/locations/locations/", {
//           Location: otherLocation,
//         });
//         finalLocationId = locRes.data._id;
//       }

//       // Handle new restaurant
//       if (data.restaurant_id === "other" && otherRestaurant.trim()) {
//         const restRes = await axios.post("/addRestaurant/", {
//           Name: otherRestaurant,
//         });
//         finalRestaurantId = restRes.data._id;
//       }

//       // Prepare and send offer data
//       const formData = new FormData();
//       formData.append("OfferName", data.OfferName);
//       formData.append("Description", data.Description);
//       formData.append("Discount", parseInt(data.Discount));
//       formData.append("StartDate", data.StartDate);
//       formData.append("EndDate", data.EndDate);
//       formData.append("location_id", finalLocationId);
//       formData.append("restaurant_id", finalRestaurantId);
//       formData.append("FoodType", data.FoodType);
//       formData.append("image", data.image[0]);

//       const res = await axios.post("/create_with_File/", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Offer created successfully!", {
//         position: "top-center",
//         autoClose: 2000,
//       });

//       setTimeout(() => {
//         navigate("/home");
//       }, 2000);
//     } catch (error) {
//       toast.error("Failed to create offer. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="home-container">
//       <div className="hero">
//         <nav className="navbar">
//           <div className="nav-links">
//             <Link to="/resthome" className="nav-item">Home</Link>
//             <Link to="/about" className="nav-item">About Us</Link>
//             <Link to="/contact" className="nav-item">Contact Us</Link>
//             <Link to="/hero" className="nav-item">Add Offer</Link>
//           </div>
//           <div className="user-profile">
//             <FontAwesomeIcon icon={faUser} />
//           </div>
//         </nav>

//         <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//         <p className="hero-subtitle" style={{ fontSize: "18px" }}>
//           Find the best street food & restaurant deals near you!
//         </p>
//       </div>

//       {/* Add Offer Form */}
//       <div className="add-offer-form">
//         <h2>Add New Offer</h2>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           <label>Offer Name:</label>
//           <input type="text" {...register("OfferName")} required />

//           <label>Description:</label>
//           <input type="text" {...register("Description")} required />

//           <label>Discount (%):</label>
//           <input type="number" {...register("Discount")} required />

//           <label>Start Date:</label>
//           <input type="datetime-local" {...register("StartDate")} required />

//           <label>End Date:</label>
//           <input type="datetime-local" {...register("EndDate")} required />

//           <label>Address:</label>
//           <input type="text" {...register("location_id")} required />

//           <label>Restaurant:</label>
//           <input type="text" {...register("")} required />

//           <label>Food Type:</label>
//           <input type="text" {...register("FoodType")} required />

//           <label>Image:</label>
//           <input type="file" {...register("image")} required />

//           <button type="submit">Submit Offer</button>
//         </form>
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export { AddOffer };



import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddOffer = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate(); // Use navigate correctly

    const getAllRestaurants = async () => {
        try {
            const res = await axios.get("/getRestaurant/");
            setRestaurants(res.data);
        } catch (error) {
            toast.error("Failed to fetch restaurants.");
            console.error(error);
        }
    };

    const getAllLocations = async () => {
        try {
            const res = await axios.get("/locations/getLocations/");
            setLocations(res.data);
        } catch (error) {
            toast.error("Failed to fetch locations.");
            console.error(error);
        }
    };

    useEffect(() => {
        getAllRestaurants();
        getAllLocations();
    }, []);

    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        try {
            const formData = new FormData();
            formData.append("OfferName", data.OfferName);
            formData.append("Description", data.Description);
            formData.append("Discount", parseInt(data.Discount));
            formData.append("StartDate", data.StartDate);
            formData.append("EndDate", data.EndDate);
            formData.append("address",data.address);
            formData.append("stallname",data.stallname);
            formData.append("FoodType", data.FoodType);
            formData.append("image", data.image[0]);

            const res = await axios.post("http://localhost:8000/create_with_File/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Offer created successfully!", {
                position: "top-center",
                autoClose: 2000,
            });

            setTimeout(() => {
                navigate("/home");
            }, 2000);
        } catch (error) {
            toast.error("Failed to create offer. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="home-container">
            <div className="hero">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to="/resthome" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/contact" className="nav-item">Contact Us</Link>
                        <Link to="/hero" className="nav-item">Add Offer</Link>
                       
                    </div>
                    <div className="user-profile">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </nav>

                <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
                <p className="hero-subtitle" style={{ fontSize: "18px" }}>Find the best street food & restaurant deals near you!</p>
            </div>

            {/* Add Offer Form */}
            <div className="add-offer-form">
                <h2>Add New Offer</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <label>Offer Name:</label>
                    <input type="text" {...register("OfferName")} required />

                    <label>Description:</label>
                    <input type="text" {...register("Description")} required />

                    <label>Discount (%):</label>
                    <input type="number" {...register("Discount")} required />

                    <label>Start Date:</label>
                    <input type="datetime-local" {...register("StartDate")} required />

                    <label>End Date:</label>
                    <input type="datetime-local" {...register("EndDate")} required />

                    <label>Location:</label>
                    <input type="text" {...register("address")} required />

                    <label>Restaurant:</label>
                    <input type="text" {...register("stallname")} required />

                    <label>Food Type:</label>
                    <input type="text" {...register("FoodType")} required />

                    <label>Image:</label>
                    <input type="file" {...register("image")} required />

                    <button type="submit">Submit Offer</button>
                </form>
            </div>

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
};

export { AddOffer };