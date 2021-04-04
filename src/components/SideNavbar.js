import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.scss";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import SocialIcons from "./SocialIcons";

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
    contact,
    infos = "";
  if (p.language === "fr") {
    home = "Acceuil";
    about = "À propos";
    galery = "Galerie";
    infos = "Renseignements";
    contact = "Contact";
  } else if (p.language === "he") {
    home = "דף הבית";
    about = "אודות";
    galery = "גלריה";
    infos = "מידע";
    contact = "צור קשר";
  } else if (p.language === "en") {
    home = "Home";
    about = "About";
    galery = "Galery";
    infos = "Infos";
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
              {home}
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="side-nav-link side-about"
              activeClassName="main-side-nav-active"
            >
              {about}
            </NavLink>
            <NavLink
              exact
              to="/infos"
              className="side-nav-link side-infos"
              activeClassName="main-side-nav-active"
            >
              {infos}
            </NavLink>
            <NavLink
              exact
              to="/galery"
              className="side-nav-link side-galery"
              activeClassName="main-side-nav-active"
            >
              {galery}
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="side-nav-link side-contact"
              activeClassName="main-side-nav-active"
            >
              {contact}
            </NavLink>
            <div className="side-nav-link language">
              <SocialIcons className="on-side" />
            </div>
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
