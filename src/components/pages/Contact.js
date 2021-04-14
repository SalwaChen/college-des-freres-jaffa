import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./Contact.scss";
import Modal from "../Modal";
import SocialIcons from "../SocialIcons";
import image from "../../images/secretary.png";

function Contact(p) {
  const [isOpen, setIsOpen] = useState(false);
  let contact,
    send = "";
  if (p.language === "he") {
    contact = (
      <div>
        בית ספר פרר יפו
        <br />
        רחוב יפת 23
        <br />
        תל-אביב יפו - 68130
        <br />
        ישראל
        <br />
        טלפון - 03-6821890
        <br />
        פקס - 03-6821883
        <br />
        freres_jaffa@yahoo.com
        <br />
      </div>
    );
    send = "צור קשר";
  } else if (p.language === "fr") {
    contact = (
      <div>
        Collège des Frères Jaffa
        <br />
        Rue Yeffet 23
        <br />
        Tel-Aviv Jaffa - 68130
        <br />
        Israël
        <br />
        Téléphone - 03-6821890
        <br />
        Fax - 03-6821883
        <br />
        freres_jaffa@yahoo.com
        <br />
      </div>
    );
    send = "Contactez-nous";
  } else if (p.language === "en") {
    contact = (
      <div>
        College des Freres
        <br />
        St. Yeffet 23
        <br />
        Tel-Aviv Yafo - 68130
        <br />
        Israel
        <br />
        Telephone - 03-6821890
        <br />
        Fax - 03-6821883
        <br />
        freres_jaffa@yahoo.com
        <br />
      </div>
    );
    send = "Contact us";
  }
  return (
    <Container className="contact-cont">
      <div className="contact-page">
        <div className="text-part">
          {contact}
          {/* <SocialIcons className="on-contact" /> */}
        </div>
        <div className="contact-part">
          {/* <button
            type="button"
            className="send out"
            onClick={() => setIsOpen(true)}
          > */}
          {/* <FontAwesomeIcon icon={faPaperPlane} className="icon" /> */}
          <div className="contact-symbol-img">
            {/* <div>{send}</div> */}
            <img src={image} alt="secretary" className="secretary-img" />
          </div>
          {/* </button> */}
          <Modal
            id="modal"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClose={() => setIsOpen(false)}
          ></Modal>
        </div>
      </div>
    </Container>
  );
}
export default Contact;
