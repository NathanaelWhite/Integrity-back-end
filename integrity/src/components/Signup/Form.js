import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import waiverText from "./waiver";

const SignupForm = () => {
  return (
    <div>
      <Form>
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
        </Row>
        <Row className="mb-3">
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
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Emergency Contact</Form.Label>
            <Form.Control required type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Emergency Contact Number</Form.Label>
            <Form.Control required type="text" placeholder="Number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
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
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control required type="date" placeholder="DOB" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Address 1</Form.Label>
            <Form.Control required type="text" placeholder="Address 1" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Address 2</Form.Label>
            <Form.Control required type="text" placeholder="Address 2" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
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
        </Row>
        <Row>
          <Form.Group as={Col} md="8">
            <Form.Label>
              Integrity Strength & Conditioning Liability Waiver
            </Form.Label>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <textarea readOnly>{waiverText}</textarea>
        </Row>
      </Form>
    </div>
  );
};

export default SignupForm;
