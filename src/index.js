import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
export { default as Navbar } from "./components/Navbar.js";
export { default as Home } from "./components/pages/Home";
export { default as About } from "./components/pages/About";
export { default as Contact } from "./components/pages/Contact";
export { default as Footer } from "./components/Footer.js";
export { default as Gallery } from "./components/pages/Gallery";
export { default as Infos } from "./components/pages/Infos";
export { default as SideNavbar } from "./components/SideNavbar.js";
export { SliderData } from "./components/SliderData.js";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<div>Collège des Frères</div>, document.getElementById("title"));
