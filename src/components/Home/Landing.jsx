// import React from "react";
// import "./Landing.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Landing = () => {
//   const isAuthenticated = !!localStorage.getItem("user");

//   const handleCardClick = () => {
//     if (!isAuthenticated) {
//       toast.error("Please log in or sign up first!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   const languages = [
//     "English", "Spanish", "French", "German", "Chinese", "Hindi", "Gujarati", "Arabic", "Portuguese", "Bengali", "Russian",
//     "Japanese", "Punjabi", "Korean", "Italian", "Turkish", "Dutch", "Swedish", "Greek", "Hebrew", "Thai",
//     "Vietnamese", "Polish", "Czech", "Danish", "Finnish", "Hungarian", "Norwegian", "Romanian", "Slovak",
//     "Ukrainian", "Malay", "Indonesian", "Filipino", "Persian", "Urdu", "Swahili", "Tamil", "Telugu", "Marathi"
//   ];

//   const countries = [
//     "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Spain", "Italy", "China",
//     "Japan", "South Korea", "Brazil", "Mexico", "Russia", "South Africa", "Indonesia", "Saudi Arabia", "Turkey",
//     "Netherlands", "Sweden", "Switzerland", "Norway", "Denmark", "Finland", "Poland", "Greece", "Thailand",
//     "Vietnam", "Argentina", "Chile", "Colombia", "Egypt", "Nigeria", "Pakistan", "Bangladesh", "Malaysia"
//   ];

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero">
//         <nav className="navbar">
//           <div className="nav-links">
//             <Link to="/restaurant" className="nav-item">Add Restaurant</Link>
//             <Link to="/about" className="nav-item">About Us</Link>
//             <Link to="/contact" className="nav-item">Contact Us</Link>
//             <Link to="/login" className="nav-item">Log in</Link>
//             <Link to="/signup" className="nav-item">Sign up</Link>
//           </div>
//           <div className="user-profile" style={{ width: "50px" }}>
//             <FontAwesomeIcon icon={faUser} />
//           </div>
//         </nav>

//         <h1 style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//         <p style={{ fontSize: "18px" }}>Find the best street food & restaurant deals near you!</p>
//         <Link to="/explore" className="get-started-btn">Get Started</Link>
//       </div>

//       {/* Categories */}
//       <div className="categories">
//         <h2>Explore</h2>
//         <div className="category-list">
//           <div
//             className="category-card category-offers"
//             onClick={handleCardClick}
//             style={{ cursor: "pointer" }}
//           >
//             Best Offer
//           </div>
//           <div
//             className="category-card category-streetfood"
//             onClick={handleCardClick}
//             style={{ cursor: "pointer" }}
//           >
//             Popular Indian
//           </div>
//           <div
//             className="category-card category-deals"
//             onClick={handleCardClick}
//             style={{ cursor: "pointer" }}
//           >
//             Best Deal Foods
//           </div>
//         </div>
//       </div>

//       {/* Sections */}
//       <div id="who-we-are" className="section">
//         <h2>Who We Are</h2>
//         <p>
//           We are a team dedicated to bringing you the best street food and restaurant deals!
//           Pocket Buddy is your go-to platform for discovering the best street food and restaurant deals. 
//           Our mission is to bridge the gap between small food stalls and food lovers by providing a space where users 
//           can find, review, and support local vendors. We believe in making food accessible, affordable, and exciting for everyone.
//         </p>
//       </div>

//       <div id="blogs" className="section">
//         <h2>Blogs</h2>
//         <p>
//           Read the latest updates about food trends and deals.
//           Stay updated with the latest trends in the food industry, get tips on finding the best local cuisines, 
//           and read inspiring stories of food stall owners who have made a mark in their communities. 
//           Our blogs feature expert opinions, user experiences, and food explorations that will make your food journey even more delicious.
//         </p>
//       </div>

//       <div id="features" className="section">
//         <h2>Features</h2>
//         <p>Discover the unique features of Pocket Buddy.</p>
//       </div>

//       <div id="community" className="section">
//         <h2>Community</h2>
//         <p>
//           Join a growing community of food lovers, street vendors, and restaurant owners. 
//           Share your experiences, leave reviews, recommend hidden gems, and participate in exclusive events. 
//           Pocket Buddy is more than just a food platform; it’s a movement that connects people through their love for food.
//         </p>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-left">
//           <a href="#who-we-are" className="footer-link">Who We Are</a>
//           <a href="#blogs" className="footer-link">Blogs</a>
//           <a href="#features" className="footer-link">Features</a>
//           <a href="#community" className="footer-link">Community</a>
//         </div>

//         <p className="footer-copyright">© 2025 All rights reserved.</p>

//         <div className="footer-right">
//           <select className="language-dropdown">
//             {languages.map((lang, index) => (
//               <option key={index} value={lang.toLowerCase()}>{lang}</option>
//             ))}
//           </select>
//           <select className="country-dropdown">
//             {countries.map((country, index) => (
//               <option key={index} value={country.toLowerCase()}>{country}</option>
//             ))}
//           </select>
//           <div className="footer-icons">
//             <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="#" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faXTwitter} />
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* Toast Notification */}
//       <ToastContainer />
//     </div>
//   );
// };
// export { Landing };
import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {
  const isAuthenticated = !!localStorage.getItem("user");

  const handleCardClick = () => {
    if (!isAuthenticated) {
      toast.error("Please log in or sign up first!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // Optional: Log to console for debugging
      console.log("User is authenticated, no toast shown.");
    }
  };

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Hindi", "Gujarati", "Arabic", "Portuguese", "Bengali", "Russian",
    "Japanese", "Punjabi", "Korean", "Italian", "Turkish", "Dutch", "Swedish", "Greek", "Hebrew", "Thai",
    "Vietnamese", "Polish", "Czech", "Danish", "Finnish", "Hungarian", "Norwegian", "Romanian", "Slovak",
    "Ukrainian", "Malay", "Indonesian", "Filipino", "Persian", "Urdu", "Swahili", "Tamil", "Telugu", "Marathi"
  ];

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Spain", "Italy", "China",
    "Japan", "South Korea", "Brazil", "Mexico", "Russia", "South Africa", "Indonesia", "Saudi Arabia", "Turkey",
    "Netherlands", "Sweden", "Switzerland", "Norway", "Denmark", "Finland", "Poland", "Greece", "Thailand",
    "Vietnam", "Argentina", "Chile", "Colombia", "Egypt", "Nigeria", "Pakistan", "Bangladesh", "Malaysia"
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/restaurant" className="nav-item">Add Restaurant</Link>
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/contact" className="nav-item">Contact Us</Link>
            <Link to="/login" className="nav-item">Log in</Link>
            <Link to="/signup" className="nav-item">Sign up</Link>
          </div>
          <div className="user-profile" style={{ width: "50px" }}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </nav>

        <h1 style={{ fontSize: "57px" }}>Pocket Buddy</h1>
        <p style={{ fontSize: "18px" }}>Find the best street food & restaurant deals near you!</p>
        <Link to="/explore" className="get-started-btn">Get Started</Link>
      </div>

      {/* Categories */}
      <div className="categories">
        <h2>Explore</h2>
        <div className="category-list">
          <div
            className="category-card category-offers"
            onClick={handleCardClick}
            style={{ cursor: "pointer" }}
          >
            Best Offer
          </div>
          <div
            className="category-card category-streetfood"
            onClick={handleCardClick}
            style={{ cursor: "pointer" }}
          >
            Popular Indian
          </div>
          <div
            className="category-card category-deals"
            onClick={handleCardClick}
            style={{ cursor: "pointer" }}
          >
            Best Deal Foods
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="who-we-are" className="section">
        <h2>Who We Are</h2>
        <p>
          We are a team dedicated to bringing you the best street food and restaurant deals!
          Pocket Buddy is your go-to platform for discovering the best street food and restaurant deals. 
          Our mission is to bridge the gap between small food stalls and food lovers by providing a space where users 
          can find, review, and support local vendors. We believe in making food accessible, affordable, and exciting for everyone.
        </p>
      </div>

      <div id="blogs" className="section">
        <h2>Blogs</h2>
        <p>
          Read the latest updates about food trends and deals.
          Stay updated with the latest trends in the food industry, get tips on finding the best local cuisines, 
          and read inspiring stories of food stall owners who have made a mark in their communities. 
          Our blogs feature expert opinions, user experiences, and food explorations that will make your food journey even more delicious.
        </p>
      </div>

      <div id="features" className="section">
        <h2>Features</h2>
        <p>Discover the unique features of Pocket Buddy.</p>
      </div>

      <div id="community" className="section">
        <h2>Community</h2>
        <p>
          Join a growing community of food lovers, street vendors, and restaurant owners. 
          Share your experiences, leave reviews, recommend hidden gems, and participate in exclusive events. 
          Pocket Buddy is more than just a food platform; it’s a movement that connects people through their love for food.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <a href="#who-we-are" className="footer-link">Who We Are</a>
          <a href="#blogs" className="footer-link">Blogs</a>
          <a href="#features" className="footer-link">Features</a>
          <a href="#community" className="footer-link">Community</a>
        </div>

        <p className="footer-copyright">© 2025 All rights reserved.</p>

        <div className="footer-right">
          <select className="language-dropdown">
            {languages.map((lang, index) => (
              <option key={index} value={lang.toLowerCase()}>{lang}</option>
            ))}
          </select>
          <select className="country-dropdown">
            {countries.map((country, index) => (
              <option key={index} value={country.toLowerCase()}>{country}</option>
            ))}
          </select>
          <div className="footer-icons">
            <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};
export { Landing };