import { Modal } from "react-bootstrap";

const HonorCode = ({ handleClose, show }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header
          closeButton
          style={{ borderBottom: "0 none", backgroundColor: "#F4F7FD" }}
        />
        <Modal.Body style={{ backgroundColor: "#F4F7FD" }}>
          <p>
            <strong>Honor code:</strong> We operate on an honor system. Please
            do not falsify information since there are so many children in need
            of gifts.
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{ borderTop: "0 none", backgroundColor: "#F4F7FD" }}
        ></Modal.Footer>
      </Modal>
    </div>
  );
};

export default HonorCode;
