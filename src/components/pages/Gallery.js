import React from "react";
import "./Gallery.scss";
import Slider from "../Slider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Gallery(p) {
  let more = (
    <div className="more">
      Plus de Photos
      <AiOutlineArrowRight className="icon" />
    </div>
  );
  if (p.language === "he") {
    more = (
      <div className="more">
        <AiOutlineArrowLeft className="icon icon-he" />
        לעוד תמונות
      </div>
    );
  } else if (p.language === "en") {
    more = (
      <div className="more">
        For more pics
        <AiOutlineArrowRight className="icon" />
      </div>
    );
  }
  return (
    <>
      <Slider slides={p.slides} />
      <button className="b-more">
        <a href="https://www.facebook.com/freres.jaffa/photos">{more}</a>
      </button>
    </>
  );
}

export default Gallery;
