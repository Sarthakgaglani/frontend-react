


import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const RestaurantForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  
  const [selectedState, setSelectedState] = useState("");

  const categories = ["Multi-Cuisine","Italian", "Mexican", "Indian", "Chinese", "Thai", "Japanese", "American", "Fast Food"];

  const statesAndCities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Durg", "Bilaspur"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli-Dharwad"],
    "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
  };

  const submitHandler = async (data) => {
    console.log("Restaurant Data: ", data);
    try {
      const res = await axios.post("http://127.0.0.1:8000/restaurant/", data);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        alert("Restaurant registered successfully");
        navigate("/location");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Please try again.");
    }
  };

  const styles = {
    body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: "#FFEBB7" },
    container: { textAlign: "center" },
    card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
    formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
    label: { fontWeight: "bold" },
    input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
    button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%" }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>PocketBuddy</h1>
        <div style={styles.card}>
          <h2>Restaurant Details</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* Restaurant Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Restaurant Name</label>
              <input type="text" {...register("Name")} required style={styles.input} />
            </div>

            {/* Category Dropdown */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Category</label>
              <select {...register("Category")} required style={styles.input}>
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* State Dropdown */}
            <div style={styles.formGroup}>
              <label style={styles.label}>State</label>
              <select 
                {...register("state")} 
                required 
                style={styles.input} 
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {Object.keys(statesAndCities).map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* City Dropdown (Dynamically Updated) */}
            <div style={styles.formGroup}>
              <label style={styles.label}>City</label>
              <select {...register("city")} required style={styles.input} disabled={!selectedState}>
                <option value="">Select City</option>
                {selectedState &&
                  statesAndCities[selectedState].map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))
                }
              </select>
            </div>

            {/* Area */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Area</label>
              <input type="text" {...register("area")} required style={styles.input} />
            </div>

            <button type="submit" style={styles.button}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
