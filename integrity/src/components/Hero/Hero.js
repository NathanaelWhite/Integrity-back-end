import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import StyledButton from "../../Styles/StyledButton";

const StyledHero = styled.div`
  margin: 0px;
  padding: 10%;
  color: #ffff;
  text-align: center;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    margin: 0 0 15px 0;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 6rem;
    }
    h3 {
      font-size: 2.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <div>
      <StyledHero>
        <h1 className="hero-title fw-bolder">INTEGRITY</h1>
        <h3 className="hero-sub-title">Strength & Conditioning</h3>
        <StyledButton as="a" href="/memberships">
          <Button className="button custom-btn btn-6">Get Started Today</Button>
        </StyledButton>
      </StyledHero>
    </div>
  );
};

export default Hero;
