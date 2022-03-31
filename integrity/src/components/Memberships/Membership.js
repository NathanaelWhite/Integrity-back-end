import React from "react";
import { Card, Button } from "react-bootstrap";
import memData from "./membershipData";
import StyledButton from "../../Styles/StyledButton";
import styled from "styled-components";
import heroImg from "../../assets/images/hero.jpg";

const StyledMemberships = styled.div`
  .mem-hero {
    height: 300px;
    color: #ffff;
    background-image: url(${heroImg});
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
  }
  h1 {
    font-size: 5rem;
  }
  .container {
    position: relative;
    width: 50%;
  }
  .overlay {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding: unset;
    background-color: #008cba;
    overflow: hidden;
    width: 0;
    height: 30%;
    transition: 0.5s ease;
  }
  .container:hover .overlay {
    width: 50%;
  }
  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`;

const Membership = () => {
  return (
    <div>
      <StyledMemberships>
        <div className="mem-hero">
          <h1 className="fw-bold">PRICING</h1>
          {/* <p>Join our Community.</p> */}
        </div>
        {memData.map((membership, key) => (
          <Card key={key} className="container">
            <Card.Body>
              <Card.Title>{membership.type}</Card.Title>
              <Card.Text>{membership.price}</Card.Text>
              <Card.Text>{membership.description}</Card.Text>
              <button className="overlay" type="submit">
                <div className="text">Select Plan</div>
              </button>
            </Card.Body>
          </Card>
        ))}
      </StyledMemberships>
    </div>
  );
};

export default Membership;
