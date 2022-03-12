import React from "react";
import { Nav } from "react-bootstrap";
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
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
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/memberships">Memberships</Nav.Link>
      <Nav.Link href="/schedule">Schedule</Nav.Link>
      <Nav.Link href="/faq">FAQ</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="login">Login</Nav.Link>
    </Ul>
  );
};

export default RightNav;
