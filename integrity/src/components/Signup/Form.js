import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import waiverText from "./waiver";
import Canvas from "./Canvas";
import StyledButton from "../../Styles/StyledButton";
import styled from "styled-components";

const StyledForm = styled.div`
  .waiver-text {
    margin: 12px;
    width: -webkit-fill-available;
  }
  .signup-btn {
    width: 100%;
  }
`;

const SignupForm = () => {
  return (
    <div>
      <StyledForm>
        <Form className="m-5">
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="m-1">First Name</Form.Label>
              <Form.Control required type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label className="m-1">Last Name</Form.Label>
              <Form.Control required type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomGender">
              <Form.Label className="m-1">Gender</Form.Label>
              <Form.Select required aria-label="Default select example">
                <option>Select</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="m-1">Email</Form.Label>
              <Form.Control required type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="m-1">Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="m-1">Phone</Form.Label>
              <Form.Control required type="phone" placeholder="Phone" />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="m-1">Emergency Contact</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="m-1">Emergency Contact Number</Form.Label>
              <Form.Control required type="text" placeholder="Number" />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="m-1">Date of Birth</Form.Label>
              <Form.Control required type="date" placeholder="DOB" />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="m-1">How did you hear about us?</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Website</option>
                <option value="2">Walk-in</option>
                <option value="3">Google / Web search</option>
                <option value="4">Facebook</option>
                <option value="5">Instagram</option>
                <option value="6">Member referral</option>
                <option value="7">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label className="m-1">Address 1</Form.Label>
              <Form.Control required type="text" placeholder="Address 1" />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label className="m-1">Address 2</Form.Label>
              <Form.Control required type="text" placeholder="Address 2" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="m-1">City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label className="m-1">State</Form.Label>
              <Form.Control required type="text" placeholder="State" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label className="m-1">Postal code</Form.Label>
              <Form.Control required type="text" placeholder="Postal code" />
            </Form.Group>
            <Form.Group as={Col} md="8">
              <Form.Label className="m-1">
                Integrity Strength & Conditioning Liability Waiver
              </Form.Label>
            </Form.Group>
            <textarea rows="4" class="form-control waiver-text" readonly>
              {waiverText}
            </textarea>
            <Form.Group as={Col} md="8" className="p-0">
            <Form.Label className="m-3 p-0">* Please use your mouse/finger to sign name</Form.Label>
            <Canvas />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="signature-checkbox"
              label="By clicking this checkbox you agree to online signature signing of this waiver *"
            />
            <Form.Group as={Col} md="6" className="p-0">
              <Form.Label className="mt-3">Enter Credit or Debit Card Information *</Form.Label>
              <Form.Control required type="text" placeholder="CARD NUMBER"/>
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="consent-checkbox"
              label="I consent to conduct electronic business *"
            />

            <Form.Label className="m-1">Please confirm *</Form.Label>
            <Form.Check
              type="checkbox"
              id="confirm-checkbox"
              label="reCAPTCHA"
            />

            <StyledButton className="p-0">
              <Button className="button custom-btn btn-6 signup-btn" as={Col}>
                Sign Up
              </Button>
            </StyledButton>
          </Row>
        </Form>
      </StyledForm>
    </div>
  );
};

export default SignupForm;
