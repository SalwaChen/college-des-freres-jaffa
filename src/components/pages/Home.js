import React from "react";
import "./StylePages.scss";
import { Container } from "react-bootstrap";
import MyCard from "../MyCard";

function Home(p) {
  return (
    <Container className="home-cont">
      <h1>Welcome</h1>
      <h1>Bienvenue</h1>
      <h1>ברוכים הבאים</h1>
      <h1>مرحبا</h1>
      <MyCard language={p.language} />
    </Container>
  );
}
export default Home;
