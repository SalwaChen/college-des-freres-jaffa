import { React, useState, useEffect } from "react";
import "./App.scss";
import "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Home,
  About,
  Contact,
  Footer,
  Gallery,
  SideNavbar,
  Infos,
  SliderData,
} from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "./images/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Children } from "react";

function App() {
  const [language, setLanguage] = useState("fr");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(true);
  const [clicked, setClicked] = useState(false);
  function handleClick(e) {
    if (!clicked) {
      setClicked(true);
      document
        .querySelector(".dropdown-content")
        .classList.add("show-dropdown-content");
    } else {
      document
        .querySelector(".dropdown-content")
        .classList.remove("show-dropdown-content");
      setClicked(false);
    }
  }

  useEffect(() => {
    console.log(document.title);
    //   if (document.title != newTitle) {
    //     document.title = newTitle;
    // }
    // $('meta[name="description"]').attr("content", newDescription);
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWindowSize(window.innerWidth);
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    });
    document.body.addEventListener("click", (e) => {
      if (!(e.target.className === "language-btn")) {
        document
          .querySelector(".dropdown-content")
          .classList.remove("show-dropdown-content");
        setClicked(false);
      }
    });
  }, [windowSize]);

  return (
    <Router>
      <div className={`cont-logo ${language !== "he" && "logo-right"}`}>
        <NavLink exact to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="dropdown">
        <button className="language-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faGlobe} className="fa-globe" />{" "}
          {language.toUpperCase()}
        </button>
        <ul className="dropdown-content">
          <li
            onClick={() => {
              setLanguage("fr");
              handleClick();
              document.title = "Collège des Frères Jaffa";
            }}
          >
            Français
          </li>
          <li
            onClick={() => {
              setLanguage("he");
              handleClick();
              document.title = "בית ספר פרר יפו";
            }}
          >
            עברית
          </li>
          <li
            onClick={() => {
              setLanguage("en");
              handleClick();
              document.title = "College des Freres Yafo";
            }}
          >
            English
          </li>
        </ul>
      </div>

      {window.innerWidth >= 769 ? (
        <Navbar language={language} />
      ) : (
        <SideNavbar language={language} />
      )}
      <Switch>
        <Route exact path="/">
          <Home language={language} />
        </Route>
        <Route path="/about">
          <About language={language} />
        </Route>
        <Route path="/gallery">
          <Gallery language={language} slides={SliderData} />
        </Route>
        <Route path="/contact">
          <Contact language={language} />
        </Route>
        <Route path="/infos">
          <Infos language={language} />
        </Route>
      </Switch>
      <Footer language={language} />
    </Router>
  );
}

export default App;
