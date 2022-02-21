import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/integrityNavLogo.png";
import Burger from "./Burger";

const AppNavbar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <div className="logo">
          <img
            src={logo}
            alt="integrity logo"
          />
        </div>
        <Burger />
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
