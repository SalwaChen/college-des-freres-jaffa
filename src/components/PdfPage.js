import { React } from "react";
import { Container } from "react-bootstrap";
import "./PdfPage.scss";

function PdfPage({ id }) {
  return (
    <Container>
      <embed src={`./documents/${id}.pdf`} className="pdf" />
    </Container>
  );
}

export default PdfPage;
