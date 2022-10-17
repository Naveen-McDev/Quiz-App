import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="result__container">
      <div className="result_card">
        <h3>Hi Vivek. Your Score is </h3>
        <h6>9/10</h6>
        <p onClick={handleClick}>Restart Quiz</p>
      </div>
    </div>
  );
};

export default Result;
