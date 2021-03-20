import { React } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import {
  faHome,
  faComments,
  faEnvelope,
  faImages,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";

function Navbar() {
  function handleClick(e) {
    document.querySelector(".navbar-container").classList.toggle("open");
    console.log(document.querySelector(".navbar").classList);
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
            צרו קשר
          </NavLink>
          {/* <div className="animation start-home"></div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
