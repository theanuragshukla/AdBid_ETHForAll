import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <NavBar>
        <button>
          <Link to="/manage">Manage</Link>
        </button>
        <button>
          <Link to="/">About</Link>
        </button>
      </NavBar>
    </div>
  );
}

export default Footer;
