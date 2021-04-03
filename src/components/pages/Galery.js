import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import MyCard from "../MyCard.js";
import "./StylePages.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 2200, itemsToShow: 2 },
];
const STYLE = {
  borderRadius: "6px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
  padding: "25px",
  // backgroundColor: "red",
  paddingTop: "10vh",
};
const color = {};

function Galery() {
  return (
    <div>
      <Container className="galery-cont" style={STYLE}>
        <Carousel style={color} breakPoints={breakPoints}>
          <MyCard src={window.location.origin + "/img/1.jpg"} alt="image1" />
          <MyCard src={window.location.origin + "/img/2.jpg"} alt="image2" />
          <MyCard src={window.location.origin + "/img/3.jpg"} alt="image3" />
          <MyCard src={window.location.origin + "/img/4.jpg"} alt="image4" />
          <MyCard src={window.location.origin + "/img/5.jpg"} alt="image5" />
          <MyCard src={window.location.origin + "/img/6.jpg"} alt="image6" />
          <MyCard src={window.location.origin + "/img/7.jpg"} alt="image7" />
          <MyCard src={window.location.origin + "/img/8.jpg"} alt="image8" />
          <MyCard src={window.location.origin + "/img/9.jpg"} alt="image9" />
        </Carousel>
      </Container>
    </div>
  );
}
export default Galery;
