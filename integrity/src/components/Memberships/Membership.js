import React from "react";
import { Card, Button } from "react-bootstrap";
import memData from "./membershipData";
import StyledButton from "../../Styles/StyledButton";
import styled from "styled-components";
import heroImg from "../../assets/images/hero.jpg";

const StyledMemberships = styled.div`
  .mem-hero {
    height: 200px;
    color: #ffff;
    background-image: url(${heroImg});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
          <Card key={key}>
            <Card.Body>
              <Card.Title>{membership.type}</Card.Title>
              <Card.Text>{membership.price}</Card.Text>
              <Card.Text>{membership.description}</Card.Text>
              <StyledButton>
                <Button className="button custom-btn btn-6" type="submit">
                  Select Plan
                </Button>
              </StyledButton>
            </Card.Body>
          </Card>
        ))}
      </StyledMemberships>
    </div>
  );
};

export default Membership;
