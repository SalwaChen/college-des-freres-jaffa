import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faComments,
  faEnvelope,
  faImages,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "./SocialIcons";
import logo from "../images/star-vector.png";

function Navbar() {
  const [visible, setVisible] = useState(false);

  function show() {
    if (visible) {
      console.log("oui");
      setVisible(false);
    } else {
      console.log("non");
      setVisible(true);
    }
  }
  const LOGO_STYLE = {
    height: 100,
    width: 100,
  };
  return (
    <div>
      <SocialIcons />
      <NavLink exact to="/">
        <img src={logo} style={LOGO_STYLE} alt="Logo" />
      </NavLink>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            exact
            to="/"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faHome} />
            דף הבית
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-links"
            activeClassName="main-nav-active"
            onClick={show}
          >
            <FontAwesomeIcon className="fa-nav" icon={faAddressCard} />
            אודות
          </NavLink>
          <NavLink
            exact
            to="/galery"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faImages} />
            גלריה
          </NavLink>
          {/* <NavLink exact to="/events" className="nav-links"
          activeClassName="main-nav-active">
          אירועים
        </NavLink> */}
          <NavLink
            exact
            to="/forum"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faComments} />
            פורום
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faEnvelope} />
            צרו קשר
          </NavLink>
          <div className="animation start-home"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
