import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
export { default as Navbar } from "./components/Navbar.js";
export { default as Home } from "./components/pages/Home";
export { default as About } from "./components/pages/About";
export { default as Contact } from "./components/pages/Contact";
export { default as Forum } from "./components/pages/Forum";
export { default as Footer } from "./components/Footer.js";
export { default as Galery } from "./components/pages/Galery";
export { default as SideMenu } from "./components/sidemenu/SideMenu";
export { default as SideNavbar } from "./components/SideNavbar.js";

ReactDOM.render(<App />, document.getElementById("root"));
