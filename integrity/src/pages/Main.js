import React, { Component } from "react";
//import all child components
import { Container, Title } from "../styles/Contact.styled";
import ContactInfo from "../pages/ContactInfo";
import ContactForm from "../pages/Contact";

class Main extends Component {
  render() {
    return (
      <Container>
        <Title text="Contact Us" />
        <Container wrapper>
          <ContactInfo />
          <ContactForm />
        </Container>
      </Container>
    );
  }
}

export default Main;
