import React from "react";
import { Modal } from "react-bootstrap";

const ModalContainer = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      style={{ boxShadow: "2px 2px 2px 1px grey", padding: "10px" }}
    >
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>{props.footer}</Modal.Footer>
    </Modal>
  );
};

export default ModalContainer;
