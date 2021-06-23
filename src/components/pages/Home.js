import React from "react";
import "./Home.scss";
import { Container } from "react-bootstrap";
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
        <button className="spin circle">
          <a href="https://labolanguesfrereslasallejaffa.blogspot.com/">
            <div className="column">
              <div>Lien</div>
              <div>AEFE</div>
            </div>
          </a>
        </button>
        <button className="spin circle">
          <a href="https://labolanguesfrereslasallejaffa.blogspot.com/">
            <div className="column">
              <div>Labo</div>
              <div>Langue</div>
            </div>
          </a>
        </button>
      </div>
    </Container>
  );
}
export default Home;
