import React from "react";
import "./StylePages.scss";
import { Container, Col, Row } from "react-bootstrap";
import { SideMenu } from "../../index";

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
