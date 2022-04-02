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
    display: flex;
  }
  .card-container {
    width: 25%;
  }
  .overlay {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding: unset;
    border: none;
    background-color: #040404;
    overflow: hidden;
    width: 0;
    height: 20%;
    transition: 0.5s ease;
  }
  .card-container:hover .overlay {
    width: 50%;
  }
  .text {
    color: white;
    font-size: 20px;
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  .mem-type {
    font-size: 1.5rem;
  }
  .mem-price {
    font-size: 3.5rem;
  }
  .mem-desc {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .card-container {
      width: 75%;
    }
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
        <div className="container">
        {memData.map((membership, key) => (
          <Card key={key} className="card-container">
            <Card.Body>
              <Card.Text className="mem-type fw-bold">{membership.type}</Card.Text>
              <Card.Text className="mem-price fw-bold">{membership.price}</Card.Text>
              <Card.Text className="mem-desc">{membership.description}</Card.Text>
              <button  className="overlay" type="submit">
                <a href="/signup" className="text">Select Plan</a>
              </button>
            </Card.Body>
          </Card>
        ))}
        </div>
      </StyledMemberships>
    </div>
  );
};

export default Membership;
