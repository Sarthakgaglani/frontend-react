


import React, { useState,useEffect } from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";


const HeroSection = () => {
  const [restaurants,setrestaurants] = useState([])
  const[locations,setlocations] = useState([])
  const [navigate] = useState(useNavigate())
  // const [formData, setFormData] = useState({
  //   offerName: "",
  //   description: "",
  //   discount: "",
  //   startDate: "",
  //   endDate: "",
  //   location: "",
  //   restaurant: "",
  //   foodtype:"",
  //   image: null
  // });
  const getAllRestauarnt = async()=>{

    const res = await axios.get("/getRestaurant/")
    console.log(res.data)
    setrestaurants(res.data)
  }
  const getAllLocations = async()=>{
    // const res = await axios.get("/getAllLocations/") 
    const res = await axios.get("/locations/getLocations/");
    console.log(res.data)
    setlocations(res.data)
  }

  
  useEffect(() => {
    getAllRestauarnt();
    getAllLocations();
  }, []); // Empty dependency array ensures it runs only once
  
  const {register,handleSubmit}= useForm()
  const submitHandler = async (data) => {
    try {
      console.log("Submitting Offer Data:", data);
  
      const formData = new FormData();
      formData.append("OfferName", data.OfferName);
      formData.append("Description", data.Description);
      formData.append("Discount", parseInt(data.Discount)); // Convert discount to integer
      formData.append("StartDate", data.StartDate);  // Send as string
      formData.append("EndDate", data.EndDate);  // Send as string
      formData.append("location_id", data.location_id);
      formData.append("restaurant_id", data.restaurant_id);
      formData.append("FoodType", data.FoodType);
      // formData.append("image", data.image[0]); // Ensure file is attached
      formData.append("image", data.image[0]); // Access first file if multiple

  
      const res = await axios.post("/create_with_File/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("Offer Created:", res.data);
      alert("Offer created successfully!");
    } catch (error) {
      console.error("Error submitting offer:", error);
      alert("Failed to create offer.");
    }
  };
  

  return (
    <div className="home-container">

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

        <h1 className="hero-title" style={{fontSize:"57px"}}>Pocket Buddy</h1>
        <p className="hero-subtitle"style={{fontSize:"18px"}} >Find the best street food & restaurant deals near you!</p>
        
      </div>

      {/* Add Offer Form */}
      <div className="add-offer-form">
        <h2>Add New Offer</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          
          <label htmlFor="OfferName">Offer Name:</label>
          <input type="text" {...register("OfferName")} required/>

          <label htmlFor="Description">Description:</label>
          <input type="text" {...register("Description")} required/>

          <label htmlFor="Discount">Discount (%):</label>
          {/* <input type="number" name="discount" {...register("Discount")} /> */}
          <input type="number" {...register("Discount")} required />

          <label htmlFor="StartDate">Start Date:</label>
          <input type="datetime-local" {...register("StartDate")} required />

          <label htmlFor="EndDate">End Date:</label>
          <input type="datetime-local" {...register("EndDate")} required />


<label>Location:</label>
 <select {...register("location_id")} required>
  <option value="">SELECT LOCATION</option>
  {locations.length > 0 ? (
    locations.map((location) => (
      <option key={location._id} value={location._id}>
        {location.Location} 
      </option>
    ))
  ) : (
    <option disabled>No Locations Available</option>
  )}
</select>



<label>Restaurant:</label>
<select {...register("restaurant_id")} required>
  <option value="">SELECT RESTAURANT</option>
  {restaurants?.map((restaurant) => (
    <option key={restaurant._id} value={restaurant._id}>
      {restaurant.Name}
    </option>
  ))}
</select>

          

          <label htmlFor="FoodType">Food Type:</label>
          <input type="text" {...register("FoodType")}required />

          <label>Image:</label>
          <input type="file" {...register("image")}required />

          <button type="submit">Submit Offer</button>
        </form>
      </div>
    </div>
  );
}

export { HeroSection };
