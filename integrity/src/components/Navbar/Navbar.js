import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/integrityNavLogo.png";
import Burger from "./Burger";


const AppNavbar = () => {
  return (
    <Navbar>
      <Container>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="integrity logo" />
          </a>
        </div>
        <Burger />
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
