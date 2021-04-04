import React from "react";
import "./StylePages.scss";
import { Container } from "react-bootstrap";

function Home(p) {
  return (
    <Container className="home-cont">
      {/* <div style={{ marginTop: "30px" }}> */}
      <h1>Welcome</h1>
      <h1>Bienvenue</h1>
      <h1>ברוכים הבאים</h1>
      {/* </div> */}
    </Container>
  );
}
export default Home;
