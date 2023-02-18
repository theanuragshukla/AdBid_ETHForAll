import React from "react";
import './Footer.css'
import Button from '../Button/Button.jsx'

function Footer(){

    return(
        <>
        <div className="main">
            <div className="logo"><span>Ad</span>Bid</div>
            <div className="buttons">
               <button className="btn">About</button>
               <button className="btn">Manage</button>

            </div>
        </div>
        </>
    )
}

export default Footer;