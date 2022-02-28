import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import heroImg from "../../assets/images/hero.jpg";

const StyledHero = styled.div`
  background-image: url("${heroImg}");
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 10px;
  color: #fff;
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
        <h1 className="hero-title">INTEGRITY</h1>
        <h3 className="hero-sub-title">Strength & Conditioning</h3>
        <Button href="#" variant="secondary" className="hero-btn">
          Get Started Today
        </Button>
      </StyledHero>
    </div>
  );
};

export default Hero;
