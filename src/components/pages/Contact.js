import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./Contact.scss";
import Modal from "../Modal";
import image from "../../images/secretary.png";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="cont-contact">
      <div className="contact-page">
        <div className="text-part">
          בית ספר פרר יפו
          <br />
          רחוב יפת 23
          <br />
          תל-אביב יפו - 68130
          <br />
          Israel
          <br />
          טלפון - 03-6821890
          <br />
          פקס - 03-6821883
          <br />
          מייל : freres_jaffa@yahoo.com
          <br />
          פייסבוק :
          <a
            href="https://www.facebook.com/groups/828828680554815"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-icon"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
        <div className="contact-part">
          <button
            type="button"
            className="send"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            <div className="contact-symbol-img">
              <div> צור קשר</div>
              <img src={image} alt="secretary" className="secretary-img" />
            </div>
          </button>
          <Modal
            id="modal"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          ></Modal>
        </div>
      </div>
    </Container>
  );
}
export default Contact;
