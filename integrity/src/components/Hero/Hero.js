import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import StyledButton from "../../Styles/StyledButton";
import heroImg from "../../assets/images/hero.jpg";

const StyledHero = styled.div`
  background-image: url("${heroImg}");
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 10px;
  color: #153d7c;
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
    padding: 20px;
    h1 {
      font-size: 5rem;
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
          Get Started Today
        </StyledButton>
      </StyledHero>
    </div>
  );
};

export default Hero;
