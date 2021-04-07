import React from "react";
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

function Gallery() {
  return (
    <div className="gallery-cont">
      <ImageGallery items={images} />;
    </div>
  );
}
export default Gallery;
