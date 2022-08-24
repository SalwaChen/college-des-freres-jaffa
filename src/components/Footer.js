import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
import { Container } from "reactstrap";

function Footer(p) {
  let location,
    contact = "";
  if (p.language === "he") {
    location = (
      <div>
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          rel="noreferrer"
          className="no-hover"
        >
          <GoLocation className="location-icon" />
          <br />
          רחוב יפת 23
          <div>תל אביב-יפו </div>
        </a>
      </div>
    );
    contact = "צור קשר";
  } else if (p.language === "fr") {
    location = (
      <div>
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          rel="noreferrer"
          className="no-hover"
        >
          <GoLocation className="location-icon" />
          <br />
          Rue Yeffet 23
          <div>Tel-aviv Jaffa</div>
        </a>
      </div>
    );
    contact = "Contactez-nous";
  } else if (p.language === "en") {
    location = (
      <div>
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          rel="noreferrer"
          className="no-hover"
        >
          <GoLocation className="location-icon" />
          <br /> St. Yefet 23<div>Tel-Aviv-Yafo</div>
        </a>
      </div>
    );
    contact = "Contact us";
  }
  return (
    <>
      <Container fluid className="footer-container">
        <div className="footer-row">
          <div className="address">{location}</div>
          <div className="footer-icons">
            <ul className="social-menu-footer">
              <li>
                <a
                  href="https://www.instagram.com/college.desfreres.jaffa/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-footer instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/freres.jaffa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="fa-footer facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCLROYlZCVurSBlfmLiU8sAg/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="fa-footer youtube"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <a href="tel:+9723-6821890">
              {" "}
              <FiPhoneCall className="phone-icon" />
              <br /> {contact}
              <br />
              03-6821890
            </a>
          </div>
        </div>
      </Container>
      <div className="copyrights">
        <AiOutlineCopyrightCircle className="copy-icon" /> 2022 Salwa Chen
      </div>
    </>
  );
}
export default Footer;
