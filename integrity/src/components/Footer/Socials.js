import React from "react";
import {
  Instagram,
  Facebook,
  EnvelopeOpenFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import styled from "styled-components";

const StyledSocials = styled.div`
  margin: 0;
  display: flex;
  div {
    padding: 10px;
  }
  a {
    color: #fff;
  }
  @media (max-width: 768px) {
    display; flex;
    flex-wrap: wrap;
  }
`;

const Socials = () => {
  return (
    <>
      <StyledSocials>
        <div>
          <a
            href="https://www.instagram.com/integrity_s_and_c/?hl=en"
            target="_blank"
          >
            <Instagram></Instagram>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/integritysandc/" target="_blank">
            <Facebook />
          </a>
        </div>

        <div>
          <a href="mailto:nathanaeltwhite@gmail.com" target="_blank">
            <EnvelopeOpenFill />
          </a>
        </div>
        <div>
          <a href="tel">
            <TelephoneFill />
          </a>
        </div>
      </StyledSocials>
    </>
  );
};

export default Socials;
