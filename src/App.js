import { React, useState } from "react";
import "./App.scss";
import "./components/Navbar";
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
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/galery">
          <Galery />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
