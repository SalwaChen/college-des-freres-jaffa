import { React } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComments,
  faEnvelope,
  faImages,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import logo from "../images/logo.jpg";

function Navbar(p) {
  function handleClick(e) {
    document.querySelector(".navbar-container").classList.toggle("open");
    console.log(document.querySelector(".navbar").classList);
  }
  let home,
    about,
    galery,
    contact = "";
  if (p.language === "fr") {
    home = "Acceuil";
    about = "A propos";
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
      {/* <SocialIcons /> */}
      <nav className="navbar">
        <NavLink exact to="/">
          <img src={logo} className="logo" alt="Logo" />
        </NavLink>
        <div onClick={handleClick} className="burger-icon-container">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`navbar-container ${p.language === "he" && "hebrew"}`}>
          <NavLink
            exact
            to="/"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faHome} />
            {home}
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-links"
            activeClassName="main-nav-active"
          >
            <FontAwesomeIcon className="fa-nav" icon={faAddressCard} />
            {about}
          </NavLink>
          <NavLink
            exact
            to="/galery"
            className="nav-links"
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
            className="nav-links"
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
