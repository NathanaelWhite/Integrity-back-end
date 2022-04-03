import React from "react";
import { Card, Button } from "react-bootstrap";
import memData from "./membershipData";
import styled from "styled-components";
import StyledButton from "../../Styles/StyledButton";
import heroImg from "../../assets/images/hero.jpg";

const StyledMemberships = styled.div`
  background-color: #040404;
  padding-bottom: 100%;
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
  .card-section {
    display: flex;
    height: 350px;
    width: 100%;
  }
  .card-container {
    width: 100%;
    margin: 3px;
    border: none;
  }
  .mem-type {
    font-size: 1.5rem;
    text-align: center;
    background-color: #153d7c;
    color: #fff;
    padding: 5px;
  }
  .mem-price {
    font-size: 3.5rem;
    text-align: center;
  }
  .mem-desc {
    font-size: 1rem;
    text-align: center;
    margin: 0px 0px 16px;
  }
  @media (max-width: 768px) {
    .card-section {
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
        <div className="card-section m-0">
          {memData.map((membership, key) => (
            <Card key={key} className="card-container">
              <Card.Body className="p-0">
                <Card.Text className="mem-type fw-bold">
                  {membership.type}
                </Card.Text>
                <Card.Text className="mem-price fw-bold">
                  {membership.price}
                </Card.Text>
                <Card.Text className="mem-desc">
                  {membership.description}
                </Card.Text>
                <StyledButton>
                  <Button href="/signup" className="button custom-btn btn-6">
                    Select Plan
                  </Button>
                </StyledButton>
              </Card.Body>
            </Card>
          ))}
        </div>
      </StyledMemberships>
    </div>
  );
};

export default Membership;

/* ~~~~~~~ INIT. BTN ~~~~~~~ */

// .btn {
//   position: relative;
//   padding: 1.4rem 4.2rem;
//   padding-right: 3.1rem;
//   font-size: 1.4rem;
//   color: var(--inv);
//   letter-spacing: 1.1rem;
//   text-transform: uppercase;
//   transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
//   cursor: pointer;
//   user-select: none;
// }

// .btn:before, .btn:after {
//   content: '';
//   position: absolute;
//   transition: inherit;
//   z-index: -1;
// }

// .btn:hover {
//   color: var(--def);
//   transition-delay: .5s;
// }

// .btn:hover:before {
//   transition-delay: 0s;
// }

// .btn:hover:after {
//   background: var(--inv);
//   transition-delay: .35s;
// }

// /* From Left */

// .from-left:before,
// .from-left:after {
//   top: 0;
//   width: 0;
//   height: 100%;
// }

// .from-left:before {
//   right: 0;
//   border: 1px solid var(--inv);
//   border-left: 0;
//   border-right: 0;
// }

// .from-left:after {
//   left: 0;
// }

// .from-left:hover:before,
// .from-left:hover:after {
//   width: 100%;
// }
