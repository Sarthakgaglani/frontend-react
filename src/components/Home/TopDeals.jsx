// import React, { useEffect, useState } from "react";

// const TopDeals = () => {
//     const [deals, setDeals] = useState([]);

//     useEffect(() => {
//         // Fetch deals from the backend
//         fetch("http://localhost:8000/getoffers/")  // Update with your actual backend API
//             .then(response => response.json())
//             .then(data => setDeals(data))
//             .catch(error => console.error("Error fetching deals:", error));
//     }, []);

//     return (
//         <div>
//             <h2>🔥 Available Deals</h2>
//             {deals.length > 0 ? (
//                 <div className="deals-container">
//                     {deals.map((deal) => (
//                         <div key={deal._id} className="deal-card">
//                             <img src={deal.image_url} alt={deal.OfferName} className="deal-image" />
//                             <h3>{deal.OfferName} - {deal.Discount}% Off</h3>
//                             <p>{deal.Description}</p>
//                             <p><strong>Food Type:</strong> {deal.FoodType}</p>
//                             <p><strong>Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
//                             <p><strong>Valid From:</strong> {new Date(deal.StartDate).toLocaleDateString()} - <strong>To:</strong> {new Date(deal.EndDate).toLocaleDateString()}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>No deals available right now. Check back later!</p>
//             )}
//         </div>
//     );
// };

// export {TopDeals};

// import React, { useState } from "react";
// import "./TopDeals.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const TopDeals = () => {

//     return (
//         <div className="home-container">
          
//           <div className="hero">
//             <nav className="navbar">
//               <div className="nav-links">
//                 <Link to="/topdeals" className="nav-item">All Restaurants</Link>
//                 <Link to="/myoffers" className="nav-item">My Offers</Link>
                
//               </div>
//               <div className="user-profile">
//                 <FontAwesomeIcon icon={faUser} />
//               </div>
//             </nav>
    
//             <h1 className="hero-title" style={{fontSize:"57px"}}>Pocket Buddy</h1>
//             <p className="hero-subtitle" style={{fontSize:"18px"}}>Find the best street food & restaurant deals near you!</p>
            
//           </div>
//         </div>
//     );
// };
// export { TopDeals};


import React, { useEffect, useState } from "react";
import "./TopDeals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopDeals = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getoffers/")  
            .then(response => response.json())
            .then(data => setDeals(data))
            .catch(error => console.error("Error fetching deals:", error));
    }, []);
    console.log(deals);
    return (
        <div className="home-container">
            <div className="hero">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/topdeals" className="nav-item">All Offers</Link>
                        <Link to="/myoffers" className="nav-item">My Offers</Link>
                    </div>
                    <div className="user-profile">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </nav>
                <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
                <p className="hero-subtitle" style={{ fontSize: "18px" }}>
                    Find the best street food & restaurant deals near you!
                </p>
            </div>

            {/* Deals Section */}
            <div className="deals-section">
                <h2 className="deals-heading">🔥 Available Deals</h2>
                {deals.length > 0 ? (
                    <div className="deals-container">
                    {deals.map((deal) => (
                     <Link to={`/deal/${deal._id}`} key={deal._id} className="deal-link">   
                        <div key={deal.id} className="deal-card">
                            <img src={deal.image_url} alt={deal.OfferName} />
                            <h3>{deal.OfferName} - {deal.Discount}% Off</h3>
                            <p>{deal.Description}</p>
                            <p><strong>📍 Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
                            <p><strong>📅 Valid:</strong> {new Date(deal.StartDate).toLocaleDateString()} - 
                               {new Date(deal.EndDate).toLocaleDateString()}</p>
                        </div>
                    </Link> 
                    ))}
                </div>
                
                ) : (
                    <p className="no-deals">No deals available right now. Check back later!</p>
                )}
            </div>
        </div>
    );
};

export { TopDeals };
