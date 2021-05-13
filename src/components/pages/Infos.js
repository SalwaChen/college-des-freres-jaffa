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
        <li id="reglement-hebreu">
          <a href="./documents/reglement-hebreu.pdf">תקנון בית הספר</a>
        </li>
        <li onClick={handleClick} id="horaires">
          מערכת שעות
        </li>
        <li id="vaccances">
          <a href="./documents/vaccances.pdf">לוח חופשים</a>
        </li>
        <li>שעות חופשיות מורים</li>
        <li id="reduction-hebreu">
          <a href="./documents/reduction-hebreu.pdf">טופס בקשה להנחה</a>
        </li>
        <li id="prelevement-hebreu">
          <a href="./documents/prelevement-hebreu.pdf">פרטי חשבון בנק</a>
        </li>

        <li onClick={handleClick} id="bacheliers">
          רשימת בוגרים{" "}
        </li>
      </ul>
    );
  } else if (p.language === "fr") {
    //<li id="reglement-hebreu" onClick={openModal}>Règlement
    menu = (
      <ul className="list">
        <li id="reglement-fr">
          <a href="./documents/reglement-fr.pdf">Règlement</a>
        </li>
        <li onClick={handleClick} id="horaires">
          Horaires des classes
        </li>
        <li id="vaccances">
          <a href="./documents/vaccances.pdf">Vaccances</a>
        </li>
        <li>Temps Libre - profs</li>
        <li id="reduction">
          <a href="./documents/reduction-fr.pdf">Demande de Réduction</a>
        </li>
        <li id="prelevement-hebreu">
          <a href="./documents/prelevement-hebreu.pdf"> Prélèvement bancaire</a>
        </li>
        <li onClick={handleClick} id="bacheliers">
          Bacheliers
        </li>
      </ul>
    );
  } else if (p.language === "en") {
    menu = (
      <ul className="list">
        <li id="reglement-hebreu">
          <a href="./documents/reglement-hebreu.pdf">Rules</a>
        </li>
        <li onClick={handleClick} id="horaires">
          Schedule of classes
        </li>
        <li id="vaccances">
          <a href="./documents/vaccances.pdf"> Vacation</a>
        </li>
        <li>Teacher's free time</li>
        <li id="reduction-hebreu">
          <a href="./documents/reduction-hebreu.pdf">Reduction request</a>
        </li>
        <li id="prelevement-hebreu">
          <a href="./documents/prelevement-hebreu.pdf">Bank direct debit</a>
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
