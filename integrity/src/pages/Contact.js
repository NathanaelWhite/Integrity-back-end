import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Form, Label, StyledButton, Input } from "../styles/Contact.styled";
import { Dropdown, Option } from "./Dropdown";

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

const ContactForm = () => {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  return (
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
        <WrapperGrid>
          <Label>Which service are you interested in?</Label>
          <Dropdown
            // formLabel="Choose a service"
            buttonText="Send form"
            onChange={handleSelect}
            action="/"
          >
            <Option selected value="Website" />
            <Option value="Walk In" />
            <Option value="Google/Web Search" />
            <Option value="Yelp" />
            <Option value="Facebook" />
            <Option value="Instagram" />
            <Option value="Member Referral" />
            <Option value="Other" />
          </Dropdown>
          {/* <p>You selected {optionValue} </p> */}
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
};

export default ContactForm;
