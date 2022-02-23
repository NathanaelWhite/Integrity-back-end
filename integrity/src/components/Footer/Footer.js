import React from "react";
import Socials from "./Socials";
import styled from "styled-components";
import { GeoAltFill } from "react-bootstrap-icons";

const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2f33;
  color: white;
  p  {
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Socials />
        <div>
          <p><GeoAltFill/> 1501 Hogan Ln, Suite K Waco, TX 76705</p>
        </div>
      </StyledFooter>
    </div>
  );
};

export default Footer;
