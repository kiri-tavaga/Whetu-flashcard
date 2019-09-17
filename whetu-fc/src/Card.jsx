import React from "react";
import Pic from './Pic'
import Word from './Word'

const Card = () => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">
          <Pic />
        </div>
      </div>
      <div className="back">
        <div className="answer">
          <Word />
        </div>
      </div>
    </div>
  </div>
);

export default Card;