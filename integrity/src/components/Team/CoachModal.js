import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CoachModal = ({ coach }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{coach.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bio: {coach.bio}</Modal.Body>
        <Modal.Body>Certifications: {coach.certs}</Modal.Body>
        <Modal.Body><a href={coach.socials} target="_blank">Socials</a></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CoachModal;
