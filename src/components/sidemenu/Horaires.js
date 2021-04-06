import React from "react";
import "./Horaires.scss";

const Horaires = (p) => {
  function handleChange(e) {
    // console.log(e.target.value);
  }
  let classe = "";
  switch (p.language) {
    case "fr":
      classe = "Classe";
      break;
    case "he":
      classe = "בחרו כיתה";
      break;
    case "en":
      classe = "Grade";
      break;
    default:
  }
  return (
    <select name="classes" id="classes" onChange={handleChange}>
      <option>{classe}</option>
      <option value="1A">1A - כיתה א'</option>
      <option value="1B">1B - כיתה א'</option>
      <option value="1C">1C - כיתה א'</option>
      <option value="2A">2A - כיתה ב'</option>
      <option value="2B">2B - כיתה ב'</option>
      <option value="2C">2C - כיתה ב'</option>
      <option value="3A">3A - כיתה ג'</option>
      <option value="3B">3B - כיתה ג'</option>
      <option value="3C">3C - כיתה ג'</option>
      <option value="4A">4A - כיתה ד'</option>
      <option value="4B">4B - כיתה ד'</option>
      <option value="5A">5A - כיתה ה'</option>
      <option value="5B">5B - כיתה ה'</option>
      <option value="6A">6A - כיתה ו'</option>
      <option value="6B">6B - כיתה ו'</option>
      <option value="6C">6C - כיתה ו'</option>
      <option value="7A">7A - כיתה ז'</option>
      <option value="7B">7B - כיתה ז'</option>
      <option value="8A">8A - כיתה ח'</option>
      <option value="8B">8B - כיתה ח'</option>
      <option value="9A">9A - כיתה ט'</option>
      <option value="9B">9B - כיתה ט'</option>
      <option value="10L">10L - כיתה י'</option>
      <option value="10S">10S - כיתה י'</option>
      <option value="11L">11L - כיתה יא'</option>
      <option value="11S">11S - כיתה יא'</option>
      <option value="12L">12L - כיתה יב'</option>
      <option value="12S">12S - כיתה יב'</option>
      {/* <option value="12C">12C - כיתה יב'</option> */}
    </select>
  );
};

export default Horaires;
