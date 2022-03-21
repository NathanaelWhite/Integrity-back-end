import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import waiverText from "./waiver";
import Canvas from "./Canvas";

const SignupForm = () => {
  return (
    <div>
      <Form className="m-3">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select required aria-label="Default select example">
              <option>Select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Phone</Form.Label>
            <Form.Control required type="phone" placeholder="Phone" />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control required type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Emergency Contact Number</Form.Label>
            <Form.Control required type="text" placeholder="Number" />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control required type="date" placeholder="DOB" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>How did you hear about us?</Form.Label>
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
            <Form.Label>Address 1</Form.Label>
            <Form.Control required type="text" placeholder="Address 1" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Address 2</Form.Label>
            <Form.Control required type="text" placeholder="Address 2" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" placeholder="State" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Postal code</Form.Label>
            <Form.Control required type="text" placeholder="Postal code" />
          </Form.Group>

          <Form.Group as={Col} md="8">
            <Form.Label>
              Integrity Strength & Conditioning Liability Waiver
            </Form.Label>
          </Form.Group>

          <textarea readOnly>{waiverText}</textarea>

          <Form.Label>* Please use your mouse/finger to sign name</Form.Label>
          <Canvas />

          <Form.Check
            type="checkbox"
            id="signature-checkbox"
            label="By clicking this checkbox you agree to online signature signing of this waiver *"
          />

          <Form.Group as={Col} md="6">
            <Form.Label>Enter Credit or Debit Card Information *</Form.Label>
            <Form.Control required type="text" placeholder="CARD NUMBER" />
          </Form.Group>

          <Form.Check
            type="checkbox"
            id="consent-checkbox"
            label="I consent to conduct electronic business *"
          />

          <Form.Group as={Col} md="4">
            <Form.Label>Please confirm *</Form.Label>
            <Form.Check
              type="checkbox"
              id="confirm-checkbox"
              label="reCAPTCHA"
            />
          </Form.Group>

          <Button as={Col} md="12">
            Sign Up
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default SignupForm;
