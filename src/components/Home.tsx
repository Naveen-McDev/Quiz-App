import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="home__container">
      <div className="home_card">
        <h3>Welcome to the Quiz App</h3>
        <input type="text" placeholder="Please Enter Your name" />
        <p onClick={handleClick}>Get Started</p>
      </div>
    </div>
  );
};

export default Home;
