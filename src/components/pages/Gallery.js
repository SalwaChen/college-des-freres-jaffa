import React from "react";
// import { Container } from "react-bootstrap";
// import Carousel from "react-elastic-carousel";
// import MyCard from "../MyCard.js";
import "./StylePages.scss";
import ImageGallery from "react-image-gallery";
import i1 from "../../images/img/1.jpg";
import i2 from "../../images/img/2.jpg";
import i3 from "../../images/img/3.jpg";
import i4 from "../../images/img/4.jpg";
import i5 from "../../images/img/5.jpg";
import i6 from "../../images/img/6.jpg";
import i7 from "../../images/img/7.jpg";
import i8 from "../../images/img/8.jpg";
import i9 from "../../images/img/9.jpg";

const images = [
  {
    original: i1,
  },
  {
    original: i2,
  },
  {
    original: i3,
  },
  {
    original: i4,
  },
  {
    original: i5,
  },
  {
    original: i6,
  },
  {
    original: i7,
  },
  {
    original: i8,
  },
  {
    original: i9,
  },
];

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 1 },
//   { width: 768, itemsToShow: 1 },
//   { width: 2200, itemsToShow: 1 },
// ];
// const STYLE = {
//   borderRadius: "6px",
//   boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
//   padding: "25px",
//   paddingTop: "10vh",
// };
// const color = {};

function Gallery() {
  return (
    <div className="gallery-cont">
      {/* <Container className="gallery-cont" style={STYLE}>
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
        </Carousel> */}
      <ImageGallery items={images} />;
    </div>
  );
}
export default Gallery;
