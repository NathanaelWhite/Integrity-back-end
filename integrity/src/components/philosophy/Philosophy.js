import React from "react";
import integrityLogo from "../../assets/images/integrityLogo.png";
import styled from "styled-components";

const StyledPhilo = styled.div`
  h1 {
    text-align: center;
    padding: 1.5rem;
  }
  .text-logo {
    background-color: red;
  }
`;

const Philosophy = () => {
  return (
    <div>
      <StyledPhilo>
        <h1>Philosophy</h1>
        <div className="text-logo">
          <img src={integrityLogo} alt="placeholder" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </StyledPhilo>
    </div>
  );
};

export default Philosophy;
