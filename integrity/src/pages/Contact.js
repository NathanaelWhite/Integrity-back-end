import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Form, Label, StyledButton, Input } from "../styles/Contact.styled";

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

const ContactForm = () => (
  <div>
    <h3>Email Us</h3>
    <Form>
      <WrapperGrid>
        <Label>First Name</Label>
        <Input type="text" name="first-name" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Last Name</Label>
        <Input type="text" name="last-name" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Email Address</Label>
        <Input type="email" name="email" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Postal Code</Label>
        <Input type="text" name="postal-code" />
      </WrapperGrid>

      <WrapperGrid>
        <Label>Phone Number</Label>
        <Input type="text" name="phone" />
      </WrapperGrid>
      <WrapperGrid full>
        <Label>How did you hear about us?</Label>
        <Input type="text" name="" />
      </WrapperGrid>
      <WrapperGrid full>
        <Label>Interested In</Label>
        <Input type="text" name="" />
      </WrapperGrid>
      <WrapperGrid full>
        <Label>Recaptcha</Label>
      </WrapperGrid>
      <WrapperGrid full>
        <StyledButton>Submit</StyledButton>
      </WrapperGrid>
    </Form>
  </div>
);

export default ContactForm;
