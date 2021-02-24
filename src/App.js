import { React } from "react";
import "./App.scss";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Events from "./components/pages/Events";
import Galery from "./components/pages/Galery";
import Forum from "./components/pages/Forum";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SideMenu from "./components/SideMenu";js effect of pulling the book
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

////// IDEAS - make navigation bar like a bookshelve with cool

function App() {
  // const [primary, setprimary] = useState("#023047");
  // function handleClick() {
  //   console.log("coc");
  // }
  /* The following line can be included in a src/App.scss */

  // @import "~bootstrap/scss/bootstrap";

  /* The following line can be included in your src/index.js or App.js file */

  // import './App.scss';
  return (
    <Router>
      {/* <button className="change-color" onClick={handleClick}>
        Change color
      </button> */}
      <Navbar />
      <Button>Test </Button>
      {/* <SideMenu /> */}
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
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
