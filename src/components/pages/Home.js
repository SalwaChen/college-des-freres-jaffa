import React from "react";
import "./Home.scss";
import { Container, Row } from "react-bootstrap";
import MyCard from "../MyCard";
import laSalle from "../../images/la-salle-home.png";

function Home(p) {
  return (
    <Container className="home-cont">
      <img
        src={laSalle}
        className="la-salle-home"
        alt="la salle illustration"
      />
      <div className="wrap-column">
           <a
            href="https://www.aefe.fr/"
            target="_black"
          > 
        <button className="spin circle">
            <div className="column">
              Lien
              <div>AEFE</div>
            </div>
        </button>
          </a>
          <a href="https://labolanguesfrereslasallejaffa.blogspot.com/" target="_blank">
        <button className="spin circle">
            <div className="column">
              <div>Labo</div>
              <div>Langue</div>
            </div>
        </button>
          </a>
      </div>
    </Container>
  );
}
export default Home;
