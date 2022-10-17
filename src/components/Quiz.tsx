import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
  };
  return (
    <div className="quiz__container">
      <div className="quiz_card">
        <h3>Question 1/10</h3>
        <div className="quiz__form">
          <p>Question:</p>
          <div className="quiz__question">
            <p>The Spitfire L.F. Mk IX had what engine?</p>
            <div className="quiz__answer">
              <div>
                <input
                  type="radio"
                  name="answer"
                  value="Griffon 65"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                Griffon 65
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  value="Merlin 50"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                Merlin 50
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  value="Merlin 66"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                Merlin 66
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  value="Merlin X"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                Merlin X
              </div>
            </div>
          </div>
        </div>

        <p className="btn" onClick={handleClick}>
          Next
        </p>
      </div>
    </div>
  );
};

export default Quiz;
