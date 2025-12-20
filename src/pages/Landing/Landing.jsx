import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <img src={Logo} alt="GoCart Logo" className="landing-logo" />
      <h1 className="landing-title">Smarter Shopping, Smarter Selling</h1>
      <p className="landing-text">
        Predictive insights, personalized recommendations, and seamless e-commerce experiences - all in one platform.
      </p>
      <button
        className="landing-button"
        onClick={() => navigate("/home")}
      >
        Enter GoCart Now
      </button>
    </div>
  );
};

export default Landing;
