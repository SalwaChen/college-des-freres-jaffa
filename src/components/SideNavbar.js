import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.scss";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import SocialIcons from "./SocialIcons";
import { GoHome, GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

function SideNavbar(p) {
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(e.target.className);
      // if (!(e.target.className === "burger-icon-container")) {
      //   document.querySelector(".container-side-nav").style.width = "0";
      //   setClicked(false);
      // }
    });
  }, [clicked]);

  function handleClick() {
    document.querySelector(".container-side-nav").style.width = "250px";
  }
  function handleClose() {
    document.querySelector(".container-side-nav").style.width = "0";
  }
  let home,
    about,
    gallery,
    contact,
    infos = "";
  if (p.language === "fr") {
    home = "Acceuil";
    about = "À propos";
    gallery = "Galerie";
    infos = "Renseignements";
    contact = "Contact";
  } else if (p.language === "he") {
    home = "דף הבית";
    about = "אודות";
    gallery = "גלריה";
    infos = "מידע";
    contact = "צור קשר";
  } else if (p.language === "en") {
    home = "Home";
    about = "About";
    gallery = "Gallery";
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
        <GoThreeBars />
      </div>
      <div
        className={`container-side-nav ${p.language === "he" && "side-right"}`}
      >
        <AiOutlineClose className="gr-close" onClick={handleClose} />{" "}
        <NavLink exact to="/">
          <GoHome onClick={handleClose} className="fa-side-home" />
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
              onClick={handleClose}
            >
              {home}
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="side-nav-link side-about"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              {about}
            </NavLink>
            <NavLink
              exact
              to="/infos"
              className="side-nav-link side-infos"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              {infos}
            </NavLink>
            <NavLink
              exact
              to="/gallery"
              className="side-nav-link side-gallery"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
            >
              {gallery}
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="side-nav-link side-contact"
              activeClassName="main-side-nav-active"
              onClick={handleClose}
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
