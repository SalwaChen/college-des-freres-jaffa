import { React, useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faImages,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

function Navbar(p) {
  let home,
    about,
    galery,
    contact = "";
  if (p.language === "fr") {
    home = "Acceuil";
    about = "À propos";
    galery = "Galerie";
    contact = "Contact";
  } else if (p.language === "he") {
    home = "דף הבית";
    about = "אודות";
    galery = "גלריה";
    contact = "צור קשר";
  } else if (p.language === "en") {
    home = "Home";
    about = "About";
    galery = "Galery";
    contact = "Contact";
  }
  return (
    <Container className="cont-nav">
      <nav className="navbar">
        <div className={`navbar-container ${p.language === "he" && "hebrew"}`}>
          <NavLink
            exact
            to="/"
            className="nav-links home"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faHome} />
            {home}
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-links about"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faAddressCard} />
            {about}
          </NavLink>
          <NavLink
            exact
            to="/galery"
            className="nav-links galery"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faImages} />
            {galery}
          </NavLink>
          {/* <NavLink exact to="/events" className="nav-links"
          activeClassName="main-nav-active">
          אירועים
        </NavLink> */}
          {/* <NavLink
            exact
            to="/forum"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faComments} />
            פורום
          </NavLink> */}
          <NavLink
            exact
            to="/contact"
            className="nav-links contact"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faEnvelope} />
            {contact}
          </NavLink>
          {/* <div className="animation start-home"></div> */}
        </div>
      </nav>
      {/* <FontAwesomeIcon icon={faPhone} />
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <SocialIcons /> */}
    </Container>
  );
}

export default Navbar;
