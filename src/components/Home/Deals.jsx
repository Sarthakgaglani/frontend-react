import React, { useEffect, useState } from "react";
import "./Deals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Deals = () => {
    const [deals, setDeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [filteredDeals, setFilteredDeals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/getoffers/")  
            .then(response => response.json())
            .then(data => {
                const sortedDeals = data.sort((a, b) => b.Discount - a.Discount); // Sort deals by discount (high to low)
                setDeals(sortedDeals);
                setFilteredDeals(sortedDeals);
            })
            .catch(error => console.error("Error fetching deals:", error));
    }, []);

    // Handle Search
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase(); // Convert search input to lowercase
        setSearchQuery(e.target.value); // Store the original input (without converting)
    
        if (query === "") {
            setFilteredDeals(deals);
        } else {
            const filtered = deals.filter((deal) =>
                deal.OfferName.toLowerCase().includes(query) || 
                (deal.restaurant?.Name && deal.restaurant?.Name.toLowerCase().includes(query)) // Search by restaurant name
            );
            setFilteredDeals(filtered.sort((a, b) => b.Discount - a.Discount)); // Ensure sorted order after filtering
        }
    };

    return (
        <div className="home-container">
            <div className="hero">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/topdeals" className="nav-item">All Offers</Link>
                        <Link to="/foodstalls" className="nav-item">Indian Food</Link>
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
                
                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for deals or restaurants..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button>Search</button>
                </div>
            </div>

            {/* Deals Section */}
            <div className="deals-section">
                <h2 className="deals-heading">🔥 High Demand Offers</h2>
                {filteredDeals.length > 0 ? (
                    <div className="deals-container">
                        {filteredDeals.map((deal) => (
                            <Link to={`/deal/${deal._id}`} key={deal._id} className="deal-link">   
                                <div className="deal-card">
                                    <img src={deal.image_url} alt={deal.OfferName} />
                                    <h3>{deal.OfferName} - {deal.Discount}% Off</h3>
                                    <p><strong>Food Type:</strong> {deal.FoodType}</p>
                                    <p><strong>Restaurant Name:</strong> {deal.restaurant?.Name}</p>
                                    <p><strong>📍 Location:</strong> {deal.location?.title}, {deal.location?.Location}</p>
                                    <p><strong>📅 Valid:</strong> {new Date(deal.StartDate).toLocaleDateString()} - 
                                       {new Date(deal.EndDate).toLocaleDateString()}</p>
                                </div>
                            </Link> 
                        ))}
                    </div>
                ) : (
                    <p className="no-deals">No results found for "{searchQuery}". Try another search!</p>
                )}
            </div>
        </div>
    );
};

export { Deals };
