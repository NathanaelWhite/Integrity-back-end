import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import StyledButton from "../../Styles/StyledButton";
import { AwardFill } from "react-bootstrap-icons";

const StyledModal = styled.div``;

const CoachModal = ({ coach }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <StyledButton>
        <Button
          className="button custom-btn btn-6"
          variant="primary"
          onClick={handleShow}
        >
          Learn More
        </Button>
      </StyledButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{coach.name}</Modal.Title>
        </Modal.Header>
        <img src={coach.image} alt="profile" />
        <Modal.Body>
          <h5 className="fw-bold">About:</h5> {coach.bio}
        </Modal.Body>
        <Modal.Body>
          <h5 className="fw-bold">Certifications:</h5>
          <ul className="p-0 fw-bold">
            <AwardFill size={30} /> {coach.certs[0]}
          </ul>
          <ul className="p-0 fw-bold">
            <AwardFill size={30} /> {coach.certs[1]}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CoachModal;
