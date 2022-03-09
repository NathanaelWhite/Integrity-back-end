import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";

const CoachModal = ({ coach }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Learn More
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{coach.name}</Modal.Title>
        </Modal.Header>
        <img src={coach.image} alt="profile image" />
        <Modal.Body>Bio: {coach.bio}</Modal.Body>
        <Modal.Body>Certifications: {coach.certs}</Modal.Body>
      </Modal>
    </>
  );
};

export default CoachModal;
