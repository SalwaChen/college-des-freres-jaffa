import { React, useState } from "react";
import PdfPage from "../components/PdfPage";
import "./SideMenu.scss";
import image from "../images/side-menu-book-style.png";

function SideMenu() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState("");
  function handleClickPdf(e) {
    setClicked(true);
    setId(e.target.id);
  }
  function handleClick() {}
  if (clicked && id) {
    return <PdfPage id={id} />;
  } else {
    return (
      <div className="side-menu">
        <div>
          <img src={image} alt="books-vector" className="books-vector" />
        </div>
        <div className="list">
          <ul>
            <li id="reglement-hebreu" onClick={handleClickPdf}>
              תקנון בית הספר
            </li>
            <li>מערכת שעות</li>
            <li>לוח חופשים</li>
            <li>שעות חופשיות מורים</li>
            <li>מסמכים חשובים</li>
            <li id="reduction-hebreu" onClick={handleClickPdf}>
              טופס בקשה להנחה
            </li>
            <li id="prelevement-hebreu" onClick={handleClickPdf}>
              פרטי חשבון בנק
            </li>
            <li onClick={handleClick}>רשימת בוגרים </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
