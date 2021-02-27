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

function Footer() {
  return (
    <Container fluid className="footer-comp">
      <div>
        <Row>
          <Col>
            <div className="text-center">רחוב יפת 23, תל-אביב יפו</div>
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
                  <FontAwesomeIcon icon={faInstagram} className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/828828680554815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCLROYlZCVurSBlfmLiU8sAg/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faYoutube} className="fa" />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            <div>צרו קשר</div>
            <div> 03-6821890</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Footer;
