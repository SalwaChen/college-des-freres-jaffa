import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
import { Container, Row, Col } from "reactstrap";

function Footer(p) {
  let location,
    contact = "";
  if (p.language === "he") {
    location = "רחוב יפת 23, תל-אביב יפו";
    contact = "צור קשר";
  } else if (p.language === "fr") {
    location = "Rue Yeffet 23, Tel-aviv Jaffa";
    contact = "Contactez-nous";
  } else if (p.language === "en") {
    location = "St. Yefet 23, Tel-aviv Yafo";
    contact = "Contact us";
  }
  return (
    <Container fluid className="footer-comp">
      <div>
        <div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa map" />
            {location}
          </div>
        </div>

        <div>
          <ul className="social-menu">
            <li>
              <a
                href="https://www.instagram.com/college.desfreres.jaffa/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon icon={faInstagram} className="fa instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/828828680554815"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon icon={faFacebook} className="fa facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCLROYlZCVurSBlfmLiU8sAg/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons"
              >
                <FontAwesomeIcon icon={faYoutube} className="fa youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="phone-cont">
          <div>
            <FontAwesomeIcon icon={faPhone} className="fa phone" />
          </div>

          <div>
            {contact}
            <div>03-6821890</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
