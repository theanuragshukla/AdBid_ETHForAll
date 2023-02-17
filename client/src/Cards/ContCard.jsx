import React from "react";
import "./Card.css";

function Card({ heading, children }) {
  return (
    <div className="Card">
      <h2>#{heading}</h2>
      {children}
    </div>
  );
}

export default Card;
