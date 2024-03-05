// Component representing the welcome screen of the application.
import React from "react";
import "./WelcomeScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/user-details");
  };

  return (
    <div className="welcome-screen">
      <img
        src="https://images.pexels.com/photos/2091760/pexels-photo-2091760.jpeg"
        alt="Welcome"
      />
      <img
        src="https://images.hindustantimes.com/img/2022/10/26/1600x900/House_Eazy_1666786916435_1666786924713_1666786924713.jpg"
        alt="Logo"
        className="logo"
      />
      <div className="welcome-text">
        <h1>
          Find Your <br />
          Best Property
        </h1>
        <p>
          Our commitment to excellence, innovation, and personalized service
          sets us apart as a leading real estate company.
        </p>
        <button onClick={handleStartButtonClick}>
          Get Started <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
