import React from "react";
import CoachModal from "./CoachModal";
import coachData from "./coachData";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledTeam = styled.div`
  padding: 15px 0 15px 0;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    color: #ffff;
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    background-color: #ffff;
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
  .team-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Team = () => {
  return (
    <>
      <StyledTeam>
        <h1>Meet Our Team</h1>
        <div className="underline" />
        <div className="team-section">
        {coachData.map((coach, key) => (
          <div className="teamCards" key={key}>
            <Card style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{coach.name}</Card.Title>
                <CoachModal coach={coach}/>
              </Card.Body>
            </Card>
          </div>
        ))}
        </div>
      </StyledTeam>
    </>
  );
};

export default Team;
