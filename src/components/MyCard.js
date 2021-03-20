import React from "react";
import {
  Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  // CardLink,
} from "reactstrap";

function MyCard({ src, alt }) {
  return (
    <div>
      <Card>
        <img width="100%" src={src} alt={alt} />
      </Card>
    </div>
  );
}
export default MyCard;
