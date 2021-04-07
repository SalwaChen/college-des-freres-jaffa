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
} from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "./images/logo-png.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [language, setLanguage] = useState("fr");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWindowSize(window.innerWidth);
        setNavbar(false);
      } else {
        setNavbar(true);
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
        <FontAwesomeIcon
          className="fa-globe"
          icon={faGlobe}
          onClick={() =>
            (document.querySelector(".dropdown-content").style.display =
              "block")
          }
        />
        <ul className="dropdown-content">
          <li
            onClick={() => {
              setLanguage("fr");
              document.querySelector(".dropdown-content").style.display =
                "none";
            }}
          >
            Français
          </li>
          <li
            onClick={() => {
              setLanguage("he");
              document.querySelector(".dropdown-content").style.display =
                "none";
            }}
          >
            עברית
          </li>
          <li
            onClick={() => {
              setLanguage("en");
              document.querySelector(".dropdown-content").style.display =
                "none";
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
          <Gallery />
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
