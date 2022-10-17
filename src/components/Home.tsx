import React from "react";

const Home = () => {
  const handleClick = () => {};

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
