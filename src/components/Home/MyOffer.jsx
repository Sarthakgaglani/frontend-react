// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./MyOffer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// const MyOffer = () => {
//     const [myOffers, setMyOffers] = useState([]);

//     // Fetch saved offers from local storage
//     useEffect(() => {
//         const savedOffers = JSON.parse(localStorage.getItem("myOffers")) || [];
//         setMyOffers(savedOffers);
//     }, []);

//     const handleRemoveOffer = (index) => {
//         const savedOffers = JSON.parse(localStorage.getItem("myOffers")) || [];
//         const updatedOffers = savedOffers.filter((_, i) => i !== index);
//         localStorage.setItem("myOffers", JSON.stringify(updatedOffers));
//         setMyOffers(updatedOffers);
//     };
    

//     return (
//         <div className="home-container">
//             {/* Hero Section */}
//             <div className="hero">
//                 <nav className="navbar">
//                     <div className="nav-links">
//                         <Link to="/home" className="nav-item">Home</Link>
//                         <Link to="/topdeals" className="nav-item">All Restaurants</Link>
//                         <Link to="/deals" className="nav-item">Top Deals</Link>
//                         <Link to="/myoffers" className="nav-item">My Offers</Link>
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

//             {/* My Offers Section */}
//             <div className="my-offers-container">
//                 <h2>My Offers</h2>
//                 {myOffers.length === 0 ? (
//                 <p>No offers added yet.</p>
//                     ) : (
//                     myOffers.map((offer, index) => (
//                     <div key={index} className="offer-card">
//                     <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
//                     <p><strong>Description:</strong> {offer.Description}</p>
//                     <p><strong>Food Type:</strong> {offer.FoodType}</p>
//                     <p><strong>Location:</strong> {offer.location?.title}, {offer.location?.Location}</p>
//                     <button className="remove-btn" onClick={() => handleRemoveOffer(index)}>Remove</button>
//             </div>
//          ))
//         )}

//             </div>
//         </div>
//     );
// };

// export {MyOffer};


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./MyOffer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// const MyOffer = () => {
//   const [myOffers, setMyOffers] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const userEmail = user?.email;

//     if (userEmail) {
//       const savedOffers = JSON.parse(localStorage.getItem(`myOffers_${userEmail}`)) || [];
//       setMyOffers(savedOffers);
//     }
//   }, []);

//   const handleRemoveOffer = (index) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const userEmail = user?.email;

//     if (userEmail) {
//       const savedOffers = JSON.parse(localStorage.getItem(`myOffers_${userEmail}`)) || [];
//       const updatedOffers = savedOffers.filter((_, i) => i !== index);
//       localStorage.setItem(`myOffers_${userEmail}`, JSON.stringify(updatedOffers));
//       setMyOffers(updatedOffers);
//     }
//   };

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero">
//         <nav className="navbar">
//           <div className="nav-links">
//             <Link to="/home" className="nav-item">Home</Link>
//             <Link to="/topdeals" className="nav-item">All Restaurants</Link>
//             <Link to="/deals" className="nav-item">Top Deals</Link>
//             <Link to="/myoffers" className="nav-item">My Offers</Link>
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

//       {/* My Offers Section */}
//       <div className="my-offers-container">
//         <h2>My Offers</h2>
//         {myOffers.length === 0 ? (
//           <p>No offers added yet.</p>
//         ) : (
//           myOffers.map((offer, index) => (
//             <div key={index} className="offer-card">
//               <h3>{offer.OfferName} - {offer.Discount}% Off</h3>
//               {/* <p><strong>Description:</strong> {offer.Description}</p>
//               <p><strong>Food Type:</strong> {offer.FoodType}</p> */}
//               <p><strong>Restaurant Name:</strong> {offer.restaurant?.Name}</p>
//               <button className="remove-btn" onClick={() => handleRemoveOffer(index)}>Remove</button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export { MyOffer };
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MyOffer = () => {
  const [myOffers, setMyOffers] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;

    if (userEmail) {
      const savedOffers = JSON.parse(localStorage.getItem(`myOffers_${userEmail}`)) || [];
      setMyOffers(savedOffers);
    }
  }, []);

  const handleRemoveOffer = (index) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;

    if (userEmail) {
      const savedOffers = JSON.parse(localStorage.getItem(`myOffers_${userEmail}`)) || [];
      const updatedOffers = savedOffers.filter((_, i) => i !== index);
      localStorage.setItem(`myOffers_${userEmail}`, JSON.stringify(updatedOffers));
      setMyOffers(updatedOffers);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/topdeals" className="nav-item">All Restaurants</Link>
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

      {/* My Offers Section */}
      <div className="my-offers-container">
        <h2>My Offers</h2>
        {myOffers.length === 0 ? (
          <p>No offers added yet.</p>
        ) : (
          myOffers.map((offer, index) => (
            <div key={index} className="offer-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
              <div>
                <h3 style={{ margin: '0', fontSize: '18px' }}>{offer.Discount}% Off - {offer.restaurant?.Name}</h3>
              </div>
              <button className="remove-btn" onClick={() => handleRemoveOffer(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { MyOffer };
