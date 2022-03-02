import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledTeam = styled.div`
  padding: 15px 0 15px 0;
  text-align: center;
  .underline {
    width: 8rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 5px;
  }
  .teamCards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }
`;

const Team = () => {
  return (
    <div>
      <StyledTeam>
        <h1>Meet Our Team</h1>
        <div className="underline" />
        <div className="teamCards">
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Brian Kost</Card.Title>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-2" m>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Nathanael White</Card.Title>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Bradley Shanks</Card.Title>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        </div>
      </StyledTeam>
    </div>
  );
};

export default Team;
