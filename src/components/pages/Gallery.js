import React from "react";
import "./Gallery.scss";
import Slider from "../Slider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Gallery(p) {
  let more = (
    <div>
      Plus de Photos
      <AiOutlineArrowRight className="icon" />
    </div>
  );
  if (p.language === "he") {
    more = (
      <div>
        <AiOutlineArrowLeft className="icon-he" />
        לעוד תמונות
      </div>
    );
  } else if (p.language === "en") {
    more = (
      <div>
        For more pics
        <AiOutlineArrowRight className="icon" />
      </div>
    );
  }
  return (
    <>
      <Slider slides={p.slides} />
      <button className="b-more">
        <a href="https://www.facebook.com/freres.jaffa/photos" className="more">
          {more}
        </a>
      </button>
    </>
  );
}

export default Gallery;
