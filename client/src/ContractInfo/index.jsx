import React from "react";
import Card1 from "../Cards/ContCard.jsx"
import Card2 from "../Cards/ContCard2.jsx"
import Card3 from "../Cards/ContCard3.jsx"
import Image from '../../public/graph-dark.svg'

import "./ContractInfo.css";


const ContractInfo = () => {
  return (
    <>
    <div className="mainBody">
    <Card1/>
    <Card2/>
    <Card3/>
    </div>


    </>
  );
};

export default ContractInfo;
