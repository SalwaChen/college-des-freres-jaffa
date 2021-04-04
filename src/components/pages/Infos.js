import React, { useState } from "react";
import "./StylePages.scss";
import { Container } from "react-bootstrap";
import SideMenu from "../sidemenu/SideMenu";
import "./Infos.scss";

function Infos(p) {
  return (
    <>
      <SideMenu p={p.language} />
    </>
    // <Container className="infos-cont">
    //   <SideMenu p={p.language} />
    // </Container>
  );
}
export default Infos;
