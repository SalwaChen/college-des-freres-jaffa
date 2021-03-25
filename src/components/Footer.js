import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../images/star-vector.png";

import {
  faInstagram,
  // faFacebookSquare,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import { Container, Row, Col } from "reactstrap";

function Footer(p) {
  console.log(p.language);
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
        <Row>
          <Col>
            <div className="text-center">{location}</div>
          </Col>
          <Col>
            <ul className="social-menu">
              <li>
                <a
                  href="https://www.instagram.com/college.desfreres.jaffa/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa instagram"
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
          </Col>
          <Col className="text-center">
            <div>
              {contact}
              <div>03-6821890</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Footer;
