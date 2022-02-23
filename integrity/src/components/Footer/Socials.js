import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  Instagram,
  Facebook,
  EnvelopeOpenFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import styled from "styled-components";

const StyledSocials = styled.div`
  margin: 5px 0 0 10px;
  display: flex;
  div {
    padding: 10px;
  }
`;

const Socials = () => {
  return (
    <>
      <StyledSocials>
        <div>
          <Instagram />
        </div>
        <div>
          <Facebook />
        </div>

        <div>
          <EnvelopeOpenFill />
        </div>
        <div>
          <TelephoneFill />
        </div>
      </StyledSocials>
    </>
  );
};

export default Socials;
