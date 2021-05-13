import React, { useState } from "react";
import Result from "./Result";
import { Container } from "react-bootstrap";
import "./Bacheliers.scss";
function Bacheliers(p) {
  const [idResult, setIdResult] = useState("");

  function handleChange(e) {
    if (e.target.value !== "pick") {
      setIdResult(e.target.value);
    }
  }
  let year = "";
  switch (p.language) {
    case "fr":
      year = "Année";
      break;
    case "he":
      year = "בחרו שנה";
      break;
    case "en":
      year = "Year";
      break;
    default:
  }

  return (
    <>
      <Container className="container-bacheliers">
        <select
          name="bacheliers"
          id="select-bacheliers"
          onChange={handleChange}
        >
          <option value="pick">{year}</option>
          <option value="1987">1987</option>
          <option value="1988">1988</option>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>

        <Result idResult={idResult} />
      </Container>
    </>
  );
}

export default Bacheliers;
