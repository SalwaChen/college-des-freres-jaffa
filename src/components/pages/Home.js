import React from "react";
import "./StylePages.scss";
import { Container } from "react-bootstrap";
import SideMenu from "../sidemenu/SideMenu";

function Home(p) {
  return (
    <div>
      <Container className="home-cont">
        <SideMenu p={p.language} />
      </Container>
    </div>
  );
}
export default Home;
