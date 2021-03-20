import { React, useState } from "react";
import PdfPage from "./PdfPage";
import "./SideMenu.scss";
import image from "../../images/side-menu-book-style.png";
import Bacheliers from "./Bacheliers";
import Horaires from "./Horaires";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";

function SideMenu() {
  const [showModal, setShowModal] = useState(false);
  const [showHoraires, setShowHoraires] = useState(false);
  const [showBacheliers, setShowBacheliers] = useState(false);
  const [id, setId] = useState("");
  const [contentIsEmpty, setContentIsEmpty] = useState(true);

  function openModal(e) {
    setContentIsEmpty(true);
    setShowBacheliers(false);
    setShowHoraires(false);
    setShowModal(true);
    setId(e.target.id);
  }

  function handleClick(e) {
    setContentIsEmpty(false);
    if (e.target.id === "horaires") {
      setShowBacheliers(false);
      setShowHoraires(true);
    } else if (e.target.id === "bacheliers") {
      setShowHoraires(false);
      setShowBacheliers(true);
    }
  }
  return (
    <>
      <Container className="side-menu-cont">
        <div className="side-menu">
          <div>
            <img src={image} alt="books-vector" className="books-vector" />
          </div>
          <div className="list">
            <ul>
              <li id="reglement-hebreu" onClick={openModal}>
                תקנון בית הספר
              </li>
              <li onClick={handleClick} id="horaires">
                מערכת שעות
              </li>
              <li>לוח חופשים</li>
              <li>שעות חופשיות מורים</li>
              <li>מסמכים חשובים</li>
              <li id="reduction-hebreu" onClick={openModal}>
                טופס בקשה להנחה
              </li>
              <li id="prelevement-hebreu" onClick={openModal}>
                פרטי חשבון בנק
              </li>
              <li onClick={handleClick} id="bacheliers">
                רשימת בוגרים{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="side-menu-content">
          {contentIsEmpty ? <Welcome /> : null}
          {showHoraires ? <Horaires /> : null}
          {showBacheliers ? <Bacheliers /> : null}
        </div>
      </Container>
      <PdfPage showModal={showModal} setShowModal={setShowModal} id={id} />
    </>
  );
}

export default SideMenu;
