import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  li {
    padding: 18px 10px;
    
  }
  .navlinks:hover {
    color: #ffff;
  }
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #ffff;
    cursor: pointer;
  }
  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #CD1C1D;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #040404;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #153d7c;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Nav.Link
        href="/memberships"
        className="navlinks hover-underline-animation"
      >
        Memberships
      </Nav.Link>
      <Nav.Link href="/schedule" className="navlinks hover-underline-animation">
        Schedule
      </Nav.Link>
      <Nav.Link href="/faq" className="navlinks hover-underline-animation">
        FAQ
      </Nav.Link>
      <Nav.Link href="/contact" className="navlinks hover-underline-animation">
        Contact
      </Nav.Link>
      <Nav.Link href="login" className="navlinks hover-underline-animation">
        Login
      </Nav.Link>
    </Ul>
  );
};

export default RightNav;
