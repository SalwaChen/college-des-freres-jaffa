import React from "react";
import "./StylePages.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button,
} from "reactstrap";
import image from "../../images/1.jpg";

function Home() {
  return (
    <>
      <Container>
        <div className="home-page"></div>
        <Row>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
              </CardBody>
              <img width="100%" src={image} alt="star" />
              <CardBody>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <HeroSection />
      <Cards />
      <Footer /> */}
    </>
  );
}
export default Home;
