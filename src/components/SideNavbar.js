import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faImages,
  faAddressCard,
  faBars,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.scss";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import SocialIcons from "./SocialIcons";
import { Container } from "react-bootstrap";

function SideNavbar(p) {
  function handleClick(e) {
    document.querySelector(".container-side-nav").style.width = "250px";
    //   document.querySelector(".navbar-container").classList.add("transition");
  }
  function handleClose() {
    document.querySelector(".container-side-nav").style.width = "0";
    // document
    //   .querySelector(".container-side-nav")
    //   .classList.remove("transition");
  }
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
    <>
      <div
        onClick={handleClick}
        className={`burger-icon-container ${
          p.language === "he" && "burger-right"
        }`}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        className={`container-side-nav ${p.language === "he" && "side-right"}`}
      >
        <FontAwesomeIcon
          icon={faWindowClose}
          className="fa-close"
          onClick={handleClose}
        />{" "}
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} className="fa-side-home" />
        </NavLink>
        <nav className="nav">
          <div
            className={`side-navbar-container ${
              p.language === "he" && "side-hebrew"
            }`}
          >
            <NavLink
              exact
              to="/"
              className="side-nav-link side-home"
              activeClassName="main-side-nav-active"
            >
              <FontAwesomeIcon className="fa-side-nav" icon={faHome} />
              {home}
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="side-nav-link side-about"
              activeClassName="main-side-nav-active"
            >
              <FontAwesomeIcon className="fa-side-nav" icon={faAddressCard} />
              {about}
            </NavLink>
            <NavLink
              exact
              to="/galery"
              className="side-nav-link side-galery"
              activeClassName="main-side-nav-active"
            >
              <FontAwesomeIcon className="fa-side-nav" icon={faImages} />
              {galery}
            </NavLink>
            {/* <NavLink exact to="/events" className="side-nav-link"
      activeClassName="main-side-nav-active">
      אירועים
    </NavLink> */}
            {/* <NavLink
        exact
        to="/forum"
        className="side-nav-link"
        activeClassName="main-side-nav-active"
      >
        <FontAwesomeIcon className="fa-side-nav" icon={faComments} />
        פורום
      </NavLink> */}
            <NavLink
              exact
              to="/contact"
              className="side-nav-link side-contact"
              activeClassName="main-side-nav-active"
            >
              <FontAwesomeIcon className="fa-side-nav" icon={faEnvelope} />
              {contact}
            </NavLink>
            {/* <div className="animation start-home"></div> */}
          </div>
        </nav>
        {/* <FontAwesomeIcon icon={faPhone} className="fa-side-phone" />
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-side-map" />
        <SocialIcons className="side-social-icons" /> */}
      </div>
    </>
  );
}
export default SideNavbar;
