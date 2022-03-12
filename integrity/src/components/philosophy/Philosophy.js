import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/integrityLogo.png";

const StyledPhilo = styled.div`
  padding: 15px 0 15px 0;
  text-align: center;
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
    margin: auto;
  }
  p {
    margin: 3px;
    padding: 3px;
  }
  img {
    display: none;
  }
  @media (min-width: 768px) {
    .philoText {
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      width: 50%;
    }
  }
`;

const Philosophy = () => {
  return (
    <div>
      <StyledPhilo>
        <h1>Philosophy</h1>
        <div className="underline"/>
        <div className="philoText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={logoImg} alt="integrity logo" className="img-fluid"></img>
        </div>
      </StyledPhilo>
    </div>
  );
};

export default Philosophy;
