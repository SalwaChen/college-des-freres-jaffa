import React, { useState } from "react";
import "./Gallery.scss";
import Slider from "../Slider";

function Gallery(p) {
  let more = "Plus de Photos...";
  if (p.language === "he") {
    more = "לעוד תמונות...";
  } else if (p.language === "en") {
    more = "For more pictures...";
  }
  // } else {
  //   more = "Plus de Photos...";
  // }
  // const [clicked, setClicked] = useState(false);
  // function returnAlbum() {
  //   setClicked(true);
  // }
  // if (!clicked) {
  //   return (
  //     <Container className="gallery-cont">
  //       <img
  //         src="./img/1.jpg"
  //         alt="dss"
  //         className="thumbnail"
  //         onClick={returnAlbum}
  //       />
  //     </Container>
  //   );
  // } else {
  return (
    <>
      <Slider slides={p.slides} />
      <div>
        <a href="https://www.facebook.com/freres.jaffa/photos" className="more">
          {more}
        </a>
      </div>
    </>
  );
  // }
}

export default Gallery;
