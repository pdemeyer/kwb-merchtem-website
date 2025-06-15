import React, { useState } from "react";
import { Link } from 'gatsby'

//import logo from "../images/logo.svg";
import logo from "../images/KWB_Raak_simpel_rood.png";

const NavBar = ({ pageTitle, children }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main-navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="kwb Merchtem" style={{ width: "88px" }} />
        </Link>
        {/* Hamburger menu */}
        <button
          className={`navbar-burger burger ${isActive && "is-active"}`}
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul
        id="navMenu"
        className={` navbar-start has-text-centered navbar-menu ${
          isActive && "is-active"
        }`}
      >

        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/activiteiten">
            Activiteiten
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/kleine-raken">
            Kleine Raak
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/bestuur">
            Bestuur
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/kermis">
            Kermis
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/corrida">
            Corrida
          </Link>
        </li>
        {/*
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/blog">
            Laatste nieuws
          </Link>
        </li>
        */}
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/over">
            Over kwb Merchtem
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </li>

      </ul>
    </div>
  </nav>
  )
}

export default NavBar