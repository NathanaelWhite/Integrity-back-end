import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import StyledButton from "../../Styles/StyledButton";

const CoachModal = ({ coach }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <StyledButton>
      <Button className="button custom-btn btn-6" variant="primary" onClick={handleShow}>
        Learn More
      </Button>
      </StyledButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{coach.name}</Modal.Title>
        </Modal.Header>
        <img src={coach.image} alt="profile" />
        <Modal.Body>Bio: {coach.bio}</Modal.Body>
        <Modal.Body>Certifications: {coach.certs}</Modal.Body>
      </Modal>
    </>
  );
};

export default CoachModal;
