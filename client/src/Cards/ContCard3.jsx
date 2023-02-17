import React from "react";
import "./Card.css";
import Button from "../Button/Button.jsx"

function CardThird() {
  return (
    <>
      <div className="Card">
        <p className="heading">Contract Info</p>
       <input type="file" className="bidInp" placeholder="Contract Id" />
       <Button btnText="heooooo"/>
      </div>
    </>
  );
}

export default CardThird;
