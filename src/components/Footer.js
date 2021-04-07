import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
import { Container } from "reactstrap";

function Footer(p) {
  let location,
    contact = "";
  if (p.language === "he") {
    location = (
      <div>
        רחוב יפת 23 <div>תל אביב-יפו </div>
      </div>
    );
    contact = "צור קשר";
  } else if (p.language === "fr") {
    location = (
      <div>
        Rue Yeffet 23 <div>Tel-aviv Jaffa</div>
      </div>
    );
    contact = "Contactez-nous";
  } else if (p.language === "en") {
    location = (
      <div>
        St. Yefet 23<div>Tel-Aviv-Yafo</div>
      </div>
    );
    contact = "Contact us";
  }
  return (
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
                href="https://www.facebook.com/groups/828828680554815"
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
          {contact}
          <div>03-6821890</div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
