import React from "react";
import "./Card.css";
import Button from "../Button/Button.jsx"

function CardSec() {
  return (
    <>
      <div className="Card">
        <p className="heading">Bid Now</p>
       <input type="text" className="bidInp" placeholder="Enter Bidding Amount" />
       <Button btnText="heooooo"/>
      </div>
    </>
  );
}

export default CardSec;
