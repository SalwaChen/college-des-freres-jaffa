import { React, useState } from "react";
import PdfPage from "../sidemenu/PdfPage";
import "./Infos.scss";
import Bacheliers from "../sidemenu/Bacheliers";
import Horaires from "../sidemenu/Horaires";
import { Container } from "react-bootstrap";
import collection from "../../images/collection.png";

function Infos(p) {
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
  if (p.language === "he") {
    menu = (
      <ul className="list">
        <li id="reglement-hebreu" onClick={openModal}>
          תקנון בית הספר
        </li>
        <li onClick={handleClick} id="horaires">
          מערכת שעות
        </li>
        <li id="vaccances" onClick={openModal}>
          לוח חופשות
        </li>
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
    );
  } else if (p.language === "fr") {
    menu = (
      <ul className="list">
        <li id="reglement-hebreu" onClick={openModal}>
          Règlement
        </li>
        <li onClick={handleClick} id="horaires">
          Horaires des classes
        </li>
        <li id="vaccances" onClick={openModal}>
          Vaccances
        </li>
        <li>Temps Libre - profs</li>
        <li>Documents nécessaires</li>
        <li id="reduction" onClick={openModal}>
          Demande de Réduction
        </li>
        <li id="prelevement-hebreu" onClick={openModal}>
          Prélèvement bancaire
        </li>
        <li onClick={handleClick} id="bacheliers">
          Bacheliers
        </li>
      </ul>
    );
  } else if (p.language === "en") {
    menu = (
      <ul className="list">
        <li id="reglement-hebreu" onClick={openModal}>
          Rules
        </li>
        <li onClick={handleClick} id="horaires">
          Schedule of classes
        </li>
        <li id="vaccances" onClick={openModal}>
          Vacation
        </li>
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
    );
  }
  return (
    <>
      <Container
        className={`container-side-menu ${
          p.language === "he" && "container-side-menu-hebrew"
        }`}
      >
        <div className="side-menu">{menu}</div>
        <div className="side-menu-content">
          {contentIsEmpty && (
            <img
              src={collection}
              alt="collection"
              className="image-collection"
            />
          )}
          {showHoraires ? <Horaires language={p.language} /> : null}
          {showBacheliers ? <Bacheliers language={p.language} /> : null}
        </div>
      </Container>
      <PdfPage showModal={showModal} setShowModal={setShowModal} id={id} />
    </>
  );
}

export default Infos;
