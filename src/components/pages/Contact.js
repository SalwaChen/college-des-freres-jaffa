import { React, useState } from "react";
import { Container } from "react-bootstrap";
import "./Contact.scss";
import image from "../../images/secretary.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { GoMail, GoLocation } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
// import Modal from "../Modal";

function Contact(p) {
  let contact,
    send = "";
  if (p.language === "he") {
    contact = (
      <div>
        <h3>בית ספר פרר</h3>
        <img src={image} alt="secretary" className="secretary-img" />
        <div className="row">
          <div class="sq-cont">
            <div className="white-circle">
              <FiPhoneCall className="phone-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">+972 3-6821890</div>
              <a href="tel:+97236821890" className="phone-link">
                <button className="button-contact">להתקשר</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoMail className="mail-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">Freres_jaffa@yahoo.com</div>
              <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
                <button className="button-contact">שליחת מייל</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="sq-cont">
            <div class="white-circle">
              <RiMessengerLine className="chat-icon" />
            </div>
            <div class="square">
              <div className="describe">שיחת צ'אט ישירה</div>
              <a
                href="https://www.facebook.com/messages/t/100009016382061"
                target="_blank"
                rel="noreferrer"
                className="chat-link"
              >
                <button className="button-contact"> התחלת צ'אט</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoLocation className="location-icon-contact" />
            </div>
            <div class="square">
              <a
                href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noreferrer"
                className="street-link"
              >
                <div className="describe">יפת 23, תל-אביב יפו</div>
                <button className="button-contact">מיקום</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    send = "Contactez-nous";
  } else if (p.language === "en") {
    contact = (
      <div>
        <h3>College des Freres</h3>
        <img src={image} alt="secretary" className="secretary-img" />
        <div className="row">
          <div class="sq-cont">
            <div className="white-circle">
              <FiPhoneCall className="phone-icon-contact" />
            </div>
            <div class="square">
              {" "}
              <div className="describe">+972 3-6821890</div>
              <a href="tel:+97236821890" className="phone-link">
                <button className="button-contact">Call us</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoMail className="mail-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">Freres_jaffa@yahoo.com</div>
              <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
                <button className="button-contact">Mail us</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="sq-cont">
            <div class="white-circle">
              <RiMessengerLine className="chat-icon" />
            </div>
            <div class="square">
              <div className="describe">Live Chat Messenger</div>
              <a
                href="https://www.facebook.com/messages/t/100009016382061"
                target="_blank"
                rel="noreferrer"
                className="chat-link"
              >
                <button className="button-contact">Live Chat</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoLocation className="location-icon-contact" />
            </div>
            <div class="square">
              <a
                href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noreferrer"
                className="street-link"
              >
                <div className="describe">Yeffet 23, TLV- Yafo</div>
                <button className="button-contact">Find us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    send = "צור קשר";
  } else if (p.language === "fr") {
    contact = (
      <div>
        <h3>Collège des Frères</h3>
        <img src={image} alt="secretary" className="secretary-img" />
        <div className="row">
          <div class="sq-cont">
            <div className="white-circle">
              <FiPhoneCall className="phone-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">+972 3-6821890</div>
              <a href="tel:+97236821890" className="phone-link">
                <button className="button-contact">Appelez</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoMail className="mail-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">Freres_jaffa@yahoo.com</div>
              <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
                <button className="button-contact">Envoyer</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="sq-cont">
            <div class="white-circle">
              <RiMessengerLine className="chat-icon" />
            </div>
            <div class="square">
              <div className="describe">Live Chat Messenger</div>
              <a
                href="https://www.facebook.com/messages/t/100009016382061"
                target="_blank"
                rel="noreferrer"
                className="chat-link"
              >
                <button className="button-contact">Chat Direct</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoLocation className="location-icon-contact" />
            </div>
            <div class="square">
              <a
                href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noreferrer"
                className="street-link"
              >
                <div className="describe">Yeffet 23, TLV- Jaffa</div>
                <button className="button-contact">Localisez</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    send = "Contactez-nous";
  } else if (p.language === "en") {
    contact = (
      <div>
        <h3>College des Freres</h3>
        <img src={image} alt="secretary" className="secretary-img" />
        <div className="row">
          <div class="sq-cont">
            <div className="white-circle">
              <FiPhoneCall className="phone-icon-contact" />
            </div>
            <div class="square">
              {" "}
              <div className="describe">+972 3-6821890</div>
              <a href="tel:+97236821890" className="phone-link">
                <button className="button-contact">Call us</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoMail className="mail-icon-contact" />
            </div>
            <div class="square">
              <div className="describe">Freres_jaffa@yahoo.com</div>
              <a href="mailto:freres_jaffa@yahoo.com" className="mail-link">
                <button className="button-contact">Mail us</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="sq-cont">
            <div class="white-circle">
              <RiMessengerLine className="chat-icon" />
            </div>
            <div class="square">
              <div className="describe">Live Chat Messenger</div>
              <a
                href="https://www.facebook.com/messages/t/100009016382061"
                target="_blank"
                rel="noreferrer"
                className="chat-link"
              >
                <button className="button-contact">Live Chat</button>
              </a>
            </div>
          </div>
          <div class="sq-cont">
            <div className="white-circle">
              <GoLocation className="location-icon-contact" />
            </div>
            <div class="square">
              <a
                href="https://ul.waze.com/ul?place=ChIJYYPhYLhMHRURpiwO1bjoaU4&ll=32.05222080%2C34.75319880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noreferrer"
                className="street-link"
              >
                <div className="describe">Yeffet 23, TLV- Yafo</div>
                <button className="button-contact">Find us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    send = "Contact us";
  }
  return (
    <Container className="contact-cont">
      <div className="contact-page">{contact}</div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.6294166096427!2d34.753198799999986!3d32.0522208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cb860e18361%3A0x4e69e8b8d50e2ca6!2sYefet%20St%2023%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1623850960774!5m2!1sen!2sil"
          allowfullscreen=""
          loading="lazy"
          className="iframe"
          title="map"
        ></iframe>
      </div>
    </Container>
  );
}
export default Contact;
{
  /* <SocialIcons className="on-contact" /> */
}
{
  /* <button
    type="button"
    className="send out"
    onClick={() => setIsOpen(true)}
  > */
}
{
  /* <FontAwesomeIcon icon={faPaperPlane} className="icon" /> */
}
{
  /*<div className="contact-symbol-img">{/* <div>{send}</div> */
}
{
  /* </div></button> */
}
{
  /* <Modal
    id="modal"
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    onClose={() => setIsOpen(false)}
  ></Modal> */
}
{
}
