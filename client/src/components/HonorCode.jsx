import { Modal } from "react-bootstrap";
import React from "react";

const HonorCode = () => {
  return (
    <div>
      <Modal>
        <Modal.Header closeButton/>
        <Modal.Body>
          <p>
            <strong>Honor code:</strong> We are unable to verify each child’s
            eligibility, so we operate on an honor system. Please do not falsify
            information since there are so many children in need of gifts.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HonorCode;
