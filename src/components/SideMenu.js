import React from "react";
import "./SideMenu.scss";
import image from "../images/side-menu-book-style.png";
function SideMenu() {
  return (
    <div>
      <img src={image} alt="books-vector" className="books-vector" />
      <ul>
        <li>תקנון בית הספר</li>
        <li>מערכת שעות</li>
        <li>לוח חופשים</li>
        <li>שעות חופשיות מורים</li>
        <li>מסמכים חשובים</li>
        <li>טופס בקשה להנחה</li>
        <li>פרטי חשבון בנק</li>
        <li>רשימת בוגרים </li>
      </ul>
    </div>
  );
}

export default SideMenu;
