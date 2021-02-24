import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  // faFacebookSquare,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.scss";

function SocialIcons() {
  return (
    <div>
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
    </div>
  );
}
export default SocialIcons;
