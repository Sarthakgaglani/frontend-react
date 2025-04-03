

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./AdminDeleteOffer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

// const AdminDeleteOffer = () => {
//     const [offers, setOffers] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchOffers = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8000/getoffers/");
//                 setOffers(response.data);
//             } catch (error) {
//                 console.error("Error fetching offers:", error);
//             }
//         };
//         fetchOffers();
//     }, []);

//     const handleDelete = async (id) => {
//         if (window.confirm("Are you sure you want to delete this offer?")) {
//             try {
//                 await axios.delete("http://localhost:8000/offer/"+id);
//                 setOffers(offers.filter((offer) => offer._id !== id));
//                 alert("Offer deleted successfully!");
//             } catch (error) {
//                 console.error("Error deleting offer:", error);
//                 alert("Failed to delete offer!");
//             }
//         }
//     };

//     const handleUpdate = (id) => {
//         navigate(`/manage-offers/${id}`);
//     };

//     return (
//         <div className="home-container">
//             {/* Hero Section */}
//             <div className="hero">
//                 <nav className="navbar">
//                     <div className="nav-links">
//                         <Link to="/home" className="nav-item">Home</Link>
//                         <Link to="/topdeals" className="nav-item">All Offers</Link>
//                         <Link to="/manage-offers" className="nav-item">Manage Offers</Link>
//                     </div>
//                 </nav>
//                 <h1 className="hero-title" style={{ fontSize: "57px" }}>Pocket Buddy</h1>
//                 <h3 className="hero-title">Admin Panel</h3>
//                 <p className="hero-subtitle" style={{ fontSize: "18px" }}>
//                     Find the best street food & restaurant deals near you

//                 </p>
//             </div>

//             {/* Offers List */}
//             <div className="offers-container">
//                 <h2>All Offers</h2>
//                 {offers.length > 0 ? (
//                     offers.map((offer) => (
//                         <div key={offer._id} className="offer-card">
//                             <img src={offer.image_url} alt={offer.OfferName} className="offer-image" />
//                             <div className="offer-info">
//                                 <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
//                                 <p><strong>Description:</strong> {offer.Description}</p>
//                                 <div className="offer-buttons">
//                                     <button className="delete-button" onClick={() => handleDelete(offer._id)}>
//                                         <FontAwesomeIcon icon={faTrash} /> Delete
//                                     </button>
//                                     <button className="update-button" onClick={() => handleUpdate(offer._id)}>
//                                         <FontAwesomeIcon icon={faEdit} /> Update
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No offers available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export {AdminDeleteOffer};

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminDeleteOffer.css";

const AdminDeleteOffer = () => {
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
        navigate(`/manage-offers/${id}`);
    };

    return (
        <div className="home-container">
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

            {/* Offers List */}
            <div className="offers-container">
                <h2>All Offers</h2>
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

            {/* Toast Notifications */}
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export { AdminDeleteOffer };
