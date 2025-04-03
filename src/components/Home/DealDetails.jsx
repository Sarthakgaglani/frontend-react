// import React, { useState } from "react";
// import "./DealDetails.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const DealDetails = () => {

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
    
//             <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//             <p className="hero-subtitle" style={{ fontSize: "18px" }}>Find the best street food & restaurant deals near you!</p>
            
//           </div>
//         </div>
//     );
// };
// export { DealDetails};


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// import "./DealDetails.css";

// const DealDetails = () => {
//     const { id } = useParams();
//     const [deal, setDeal] = useState(null);

//     useEffect(() => {
    
//     const fetch= async () => {
//     const res = await axios.get("http://localhost:8000/get_offerBy_id/"+id);  
             
             
             
//          console.log(res.data);
//          setDeal(res.data) }
//          fetch();
//         }, [id]);

//     if (!deal) {
//         return <p>Loading deal details...</p>;
//     }

//     return (
//         <div className="deal-details-container">
//             <Link to="/topdeals" className="back-button">← Back to Deals</Link>
//             <h1>{deal.OfferName} - {deal.Discount}% Off</h1>
//             <img src={deal.image_url} alt={deal.OfferName} className="deal-details-image" />
//             <p><strong>Description:</strong> {deal.Description}</p>
//             <p><strong>Food Type:</strong> {deal.FoodType}</p>
//             <p><strong>Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
//             <p><strong>Valid From:</strong> {new Date(deal.StartDate).toLocaleDateString()} - 
//                <strong> To:</strong> {new Date(deal.EndDate).toLocaleDateString()}</p>
//         </div>
//     );
// };

// export {DealDetails};


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";
// import "./DealDetails.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// const DealDetails = () => {
//     const { id } = useParams();
//     const [deal, setDeal] = useState(null);
//     const [myOffers, setMyOffers] = useState([]);

//     useEffect(() => {
//         const fetch = async () => {
//             const res = await axios.get("http://localhost:8000/get_offerBy_id/" + id);
//             console.log(res.data);
//             setDeal(res.data);
//         };
//         fetch();
//     }, [id]);

//     const handleAddToCart = () => {
//         if (deal) {
//             const savedOffers = JSON.parse(localStorage.getItem("myOffers")) || [];
//             const updatedOffers = [...savedOffers, deal];
//             localStorage.setItem("myOffers", JSON.stringify(updatedOffers));
//             alert("Offer added to My Offers!");
//         }
//     };
    

//     if (!deal) {
//         return <p>Loading deal details...</p>;
//     }

//     return (
//         <div className="home-container">
//             {/* Hero Section */}
//             <div className="hero">
//                 <nav className="navbar">
//                     <div className="nav-links">
//                         <Link to="/home" className="nav-item">Home</Link>
//                         <Link to="/topdeals" className="nav-item">All Offers</Link>
//                         <Link to="/myoffers" className="nav-item">My Offers</Link>
//                         <Link to="/deals" className="nav-item">Top Deals</Link>
//                     </div>
//                     <div className="user-profile">
//                         <FontAwesomeIcon icon={faUser} />
//                     </div>
//                 </nav>

//                 <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//                 <p className="hero-subtitle" style={{ fontSize: "18px" }}>
//                     Find the best street food & restaurant deals near you!
//                 </p>
//             </div>

//             {/* Deal Details Section */}
//             <div className="deal-details-container">
//                 <Link to="/topdeals" className="back-button">← Back to Deals</Link>
//                 <h1>{deal.OfferName} - {deal.Discount}% Off</h1>
//                 <img src={deal.image_url} alt={deal.OfferName} className="deal-details-image" />
//                 <p><strong>Description:</strong> {deal.Description}</p>
//                 <p><strong>Food Type:</strong> {deal.FoodType}</p>
//                 <p><strong>Restaurant Name:</strong> {deal.restaurant?.Name}</p>
//                 <p><strong>City:</strong>{deal.restaurant?.city}</p>
//                 <p><strong>Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
//                 <p><strong>Valid From:</strong> {new Date(deal.StartDate).toLocaleDateString()} - 
//                    <strong> To:</strong> {new Date(deal.EndDate).toLocaleDateString()}</p>

//                 {/* Add to Cart Button */}
//                 <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
//             </div>

//             {/* My Offers Section - Display Added Offers */}
//             {myOffers.length > 0 && (
//                 <div className="my-offers-section">
//                     <h2>My Offers</h2>
//                     {myOffers.map((offer, index) => (
//                         <div key={index} className="offer-card">
//                             <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
//                             <p><strong>Description:</strong> {offer.Description}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export { DealDetails };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DealDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DealDetails = () => {
    const { id } = useParams();
    const [deal, setDeal] = useState(null);
    const [myOffers, setMyOffers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/get_offerBy_id/${id}`);
                console.log(res.data);
                setDeal(res.data);
            } catch (error) {
                toast.error("Failed to fetch deal details. Please try again.", {
                    position: "top-center",
                });
            }
        };
        fetch();
    }, [id]);

    const handleAddToCart = () => {
        if (deal) {
            const savedOffers = JSON.parse(localStorage.getItem("myOffers")) || [];
            const updatedOffers = [...savedOffers, deal];
            localStorage.setItem("myOffers", JSON.stringify(updatedOffers));
            setMyOffers(updatedOffers); // Update state to reflect changes
            toast.success("Offer added to My Offers!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

    if (!deal) {
        return <p>Loading deal details...</p>;
    }

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/topdeals" className="nav-item">All Offers</Link>
                        <Link to="/deals" className="nav-item">Top Deals</Link>
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

            {/* Deal Details Section */}
            <div className="deal-details-container">
                <Link to="/topdeals" className="back-button">← Back to Deals</Link>
                <h1>{deal.OfferName} - {deal.Discount}% Off</h1>
                <img src={deal.image_url} alt={deal.OfferName} className="deal-details-image" />
                <p><strong>Description:</strong> {deal.Description}</p>
                <p><strong>Food Type:</strong> {deal.FoodType}</p>
                <p><strong>Restaurant Name:</strong> {deal.restaurant?.Name}</p>
                <p><strong>City:</strong> {deal.restaurant?.city}</p>
                <p><strong>Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
                <p><strong>Valid From:</strong> {new Date(deal.StartDate).toLocaleDateString()} - 
                   <strong> To:</strong> {new Date(deal.EndDate).toLocaleDateString()}</p>

                {/* Add to Cart Button */}
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>

            {/* My Offers Section - Display Added Offers */}
            {myOffers.length > 0 && (
                <div className="my-offers-section">
                    <h2>My Offers</h2>
                    {myOffers.map((offer, index) => (
                        <div key={index} className="offer-card">
                            <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
                            <p><strong>Description:</strong> {offer.Description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
};

export { DealDetails };
