import { React, useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faImages,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import logo from "../images/logo-png.png";

function Navbar(p) {
  const [windowSize, setWindowSize] = useState(0);
  function handleClick(e) {
    document.querySelector(".navbar-container").style.width = "280px";
    document.querySelector(".burger-icon-container").left = "200px";
    document.querySelector(".navbar-container").classList.add("transition");
  }
  function handleClose() {
    document.querySelector(".navbar-container").style.width = "0";
    document.querySelector(".navbar-container").classList.remove("transition");
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 769) {
        setWindowSize(window.innerWidth);
        document.querySelector(".navbar-container").style.width = "550px";
      } else {
        document.querySelector(".navbar-container").style.width = "0";
        document
          .querySelector(".navbar-container")
          .classList.add("navbar-container-he");
      }
    });
  }, [windowSize]);

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
    <div className="cont-nav">
      <div className={`cont-logo ${p.language === "he" && "logo-he"}`}>
        <NavLink exact to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div onClick={handleClick} className="burger-icon-container">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className="navbar">
        <div className={`navbar-container ${p.language === "he" && "hebrew"}`}>
          <FontAwesomeIcon
            icon={faWindowClose}
            className="fa-close"
            onClick={handleClose}
          />
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faHome} className="fa-home" />
          </NavLink>
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
    </div>
  );
}

export default Navbar;
