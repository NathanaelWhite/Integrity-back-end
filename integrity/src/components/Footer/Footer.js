import React from "react";
import Socials from "./Socials";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2a2f33;
  color: white;
`;

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Socials />
      </StyledFooter>
    </div>
  );
};

export default Footer;
