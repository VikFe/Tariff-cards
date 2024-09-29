import React from "react";
import "../Tariff/Tariff.css";
import { useState } from "react";

const Card = ({ price, color, speed, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <div
        className={`card ${isSelected ? "selected" : ""} ${
          isHovered ? "hovered" : ""
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className={color}>
          <h4 className="card__header">Безлимитный {price}</h4>
          <h2 className="card__price">
            {price}
            <span className="card__text">руб/мес</span>
          </h2>
        </div>
        <p>до {speed} Мбит/сек</p>
        <div className="footer">
          <p>Объем включенного</p>
          <p>трафика не ограничен</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
