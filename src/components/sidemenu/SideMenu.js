import { React, useState } from "react";
import PdfPage from "./PdfPage";
import "./SideMenu.scss";
import image from "../../images/side-menu-book-style.png";
import Bacheliers from "./Bacheliers";
import Horaires from "./Horaires";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";

function SideMenu(p) {
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
  let menu = "";
  if (p.p === "he") {
    menu = (
      <div className="list hebrew">
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
    );
  } else if (p.p === "fr") {
    menu = (
      <div className="list">
        <ul>
          <li id="reglement-hebreu" onClick={openModal}>
            Règlement
          </li>
          <li onClick={handleClick} id="horaires">
            Horaires des classes
          </li>
          <li>Vaccances</li>
          <li>Temps Libre - profs</li>
          <li>Documents nécessaires</li>
          <li id="reduction-hebreu" onClick={openModal}>
            Demande de Réduction
          </li>
          <li id="prelevement-hebreu" onClick={openModal}>
            Prélèvement bancaire
          </li>
          <li onClick={handleClick} id="bacheliers">
            Bacheliers
          </li>
        </ul>
      </div>
    );
  } else if (p.p === "en") {
    menu = (
      <div className="list">
        <ul>
          <li id="reglement-hebreu" onClick={openModal}>
            Rules
          </li>
          <li onClick={handleClick} id="horaires">
            Hours of classes
          </li>
          <li>Vacation</li>
          <li>Teacher's free time</li>
          <li>necessary documents</li>
          <li id="reduction-hebreu" onClick={openModal}>
            Reduction request
          </li>
          <li id="prelevement-hebreu" onClick={openModal}>
            Bank direct debit
          </li>
          <li onClick={handleClick} id="bacheliers">
            High school graduates
          </li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <Container className="side-menu-cont">
        <div className="side-menu">{menu}</div>
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
// --------- HEBREU -------------
//  <Container className="side-menu-cont">
//         <div className="side-menu">
//           <div>
//             <img src={image} alt="books-vector" className="books-vector" />
//           </div>

//         </div>
//         <div className="side-menu-content">
//           {contentIsEmpty ? <Welcome /> : null}
//           {showHoraires ? <Horaires /> : null}
//           {showBacheliers ? <Bacheliers /> : null}
//         </div>
//       </Container>
//       <PdfPage showModal={showModal} setShowModal={setShowModal} id={id} />
