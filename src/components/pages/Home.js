import React from "react";
import "./StylePages.scss";
import { Container } from "react-bootstrap";
import SideMenu from "../sidemenu/SideMenu";

function Home() {
  return (
    <div>
      <Container>
        <SideMenu />
      </Container>
    </div>
  );
}
export default Home;
