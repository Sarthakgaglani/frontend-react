import React from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurant.css";

const Restaurant = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/restsign");
  };

  return (
    <div className="restaurant-registration">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <p>Get The App</p>
          <h1>Register your restaurant on Pocket Buddy</h1>
          <button className="register-btn" onClick={handleRegisterClick}>Register your restaurant</button>
        </div>
      </header>

      {/* Why Partner Section */}
      <section className="why-partner">
        <h2>Why should you partner with Pocket Buddy?</h2>
        <p>
          Pocket Buddy enables you to get 60% more revenue, 10x new customers and
          boost your brand visibility by providing insights to improve your
          business.
        </p>
        <div className="partner-stats">
          <div className="stat">
            <span className="icon">🌐</span>
            <p>500+ cities in India</p>
          </div>
          <div className="stat">
            <span className="icon">🍽️</span>
            <p>2 lakhs+ restaurant listings</p>
          </div>
          <div className="stat">
            <span className="icon">📈</span>
            <p>4 crore+ orders monthly</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How it works?</h2>
        <div className="steps">
          <div className="step">
            <span className="step-icon">📝</span>
            <h3>Step 1</h3>
            <p>Create your page on Pocket Buddy creating a listing</p>
          </div>
          <div className="step">
            <span className="step-icon">🚀</span>
            <h3>Step 2</h3>
            <p>Register for online ordering and attract customers with ease</p>
          </div>
          <div className="step">
            <span className="step-icon">📊</span>
            <h3>Step 3</h3>
            <p>Start receiving orders online, setup dashboard or API</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;