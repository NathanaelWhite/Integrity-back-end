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
  color: #fff;
  padding: 0 8px 0 4px;
  p {
    margin: 10px;
  }
  .ftr-address {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    .ftr-address {
      font-size: 12px;
    }
    small {
      font-size: 12px;
    }
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
  }
`;

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Socials />
        <div>
          <a href="#contact" className="ftr-address">
            <p>
              <GeoAltFill /> 1501 Hogan Ln, Suite K Waco, TX 76705
            </p>
          </a>
        </div>
        <small>&copy; Copyright 2022, Integrity Strength & Conditioning</small>
      </StyledFooter>
    </div>
  );
};

export default Footer;
