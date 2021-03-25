import { React, useState } from "react";
import "./App.scss";
import "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Home,
  About,
  Contact,
  Forum,
  Footer,
  Galery,
  SideMenu,
} from "./index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [language, setLanguage] = useState("fr");
  return (
    <Router>
      <div className="dropdown">
        <FontAwesomeIcon className="fa-globe dropbtn" icon={faGlobe} />
        <ul className="dropdown-content">
          <li onClick={() => setLanguage("fr")}>Français</li>
          <li onClick={() => setLanguage("he")}>עברית</li>
          <li onClick={() => setLanguage("en")}>English</li>
        </ul>
      </div>

      <Navbar language={language} />
      <Switch>
        <Route exact path="/">
          <Home language={language} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/galery">
          <Galery />
        </Route>
        {/* <Route path="/forum">
          <Forum /> 
        {/* </Route> */}
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer language={language} />
    </Router>
  );
}

export default App;
