import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/navbarlogo.png";
import Burger from "./Burger";


const AppNavbar = () => {
  return (
    <Navbar className="nav-img">
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
