import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
// import Modal from "../Modal";
function Contact() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contact-page">
      <div className="text">
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

      {/* <button type="button" className="send" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        <span> צור קשר</span>
      </button>
      <Modal id="modal" open={isOpen} onClose={() => setIsOpen(false)}></Modal> */}
    </div>
  );
}
export default Contact;
