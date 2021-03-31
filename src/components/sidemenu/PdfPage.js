import React, { useRef } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./PdfPage.scss";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 88px;
  right: 60px;
  color: white;
  width: 62px;
  height: 62px;
  padding: 0;
  z-index: 10;
  border-radius: 20px;
`;

function PdfPage({ showModal, setShowModal, id }) {
  const modalRef = useRef();

  function closePdf(e) {
    if (modalRef.current === e.target) setShowModal(false);
  }
  return (
    <>
      {showModal ? (
        <div className="pdf-cont" onClick={closePdf} ref={modalRef}>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal(false)}
          />
          <embed src={`./documents/${id}.pdf`} className="pdf" />
        </div>
      ) : null}
    </>
  );
}
export default PdfPage;

//   const keyPress = useCallback(
//     (e) => {
//       if (e.key === "Escape" && showModal) {
//         setShowModal(false);
//         console.log("I pressed");
//       }
//     },
//     [setShowModal, showModal]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", keyPress);
//     return () => document.removeEventListener("keydown", keyPress);
//   }, [keyPress]);
