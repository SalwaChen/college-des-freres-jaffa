import { React, useState } from "react";
import { Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./Contact.scss";
import Modal from "../Modal";
import image from "../../images/secretary.png";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail, GoLocation } from "react-icons/go";

function Contact(p) {
  const [isOpen, setIsOpen] = useState(false);
  let contact,
    send = "";
  if (p.language === "he") {
    contact = (
      <div>
        בית ספר פרר יפו
        <br />
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          className="street-link"
        >
          רחוב יפת 23 -
          <GoLocation />
        </a>
        <br />
        תל-אביב יפו - 68130
        <br />
        ישראל
        <br />
        <a href="+97236821890" className="phone-link">
          03-6821890 - טלפון <FiPhoneCall />
        </a>
        <br />
        פקס - 03-6821883
        <br />
        <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
          freres_jaffa@yahoo.com - <GoMail />
        </a>
        <br />
      </div>
    );
    send = "צור קשר";
  } else if (p.language === "fr") {
    contact = (
      <div>
        Collège des Frères Jaffa
        <br />
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          className="street-link"
        >
          <GoLocation />- Rue Yeffet 23
        </a>
        <br />
        Tel-Aviv Jaffa - 68130
        <br />
        Israël
        <br />
        <a href="tel:+97236821890" className="phone-link">
          <FiPhoneCall />- Téléphone - 03-6821890
        </a>
        <br />
        Fax - 03-6821883
        <br />
        <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
          <GoMail />- freres_jaffa@yahoo.com
        </a>
        <br />
      </div>
    );
    send = "Contactez-nous";
  } else if (p.language === "en") {
    contact = (
      <div>
        College des Freres
        <br />
        <a
          href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          className="street-link"
        >
          <GoLocation />- St. Yeffet 23
        </a>
        <br />
        Tel-Aviv Yafo - 68130
        <br />
        Israel
        <br />
        <a href="tel:+97236821890" className="phone-link">
          <FiPhoneCall /> - Telephone - 03-6821890
        </a>
        <br />
        Fax - 03-6821883
        <br />
        <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
          <GoMail />- freres_jaffa@yahoo.com
        </a>
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
