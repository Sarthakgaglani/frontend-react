// import React, { useState } from "react";
// import "./ContactUs.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Contact Form Submitted:", formData);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="hero">
//         <nav className="navbar">
//           <div className="nav-links">
//             <Link to="/home" className="nav-item">Home</Link>
//             <Link to="/about" className="nav-item">About Us</Link>
//             <Link to="/contact" className="nav-item">Contact Us</Link>
//             <Link to="/login" className="nav-item">Log in</Link>
//             <Link to="/signup" className="nav-item">Sign up</Link>
//           </div>
//           <div className="user-profile">
//             <FontAwesomeIcon icon={faUser} />
//           </div>
//         </nav>

//         <h1 className="hero-title">Pocket Buddy</h1>
//         <p className="hero-subtitle">Find the best street food & restaurant deals near you!</p>
//         <div className="search-bar">
//           <input type="text" placeholder="Search for restaurants, stalls, or cuisines..." />
//           <button>Search</button>
//         </div>
//       </div>
//       <div className="contact-us-form">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
        
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//         <label>Message:</label>
//         <textarea name="message" value={formData.message} onChange={handleChange} required />

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export {ContactUs};



