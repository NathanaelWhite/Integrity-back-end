import React from "react";
import { Nav } from "react-bootstrap";
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2A2F33;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Nav.Link href="#signup" className="link-light">Signup</Nav.Link>
      <Nav.Link href="#schedule" className="link-light">Schedule</Nav.Link>
      <Nav.Link href="#faq" className="link-light">FAQ</Nav.Link>
      <Nav.Link href="#contact" className="link-light">Contact</Nav.Link>
      <Nav.Link href="login" className="link-light">Login</Nav.Link>
    </Ul>
  );
};

export default RightNav;
