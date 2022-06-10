import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import StyledButton from "../Styles/StyledButton";

function Login() {
  return (
    <div className="login">
      <Container className="bg-body border w-50 p-4 rounded shadow opacity-75">
        <Form>
          <h4 className="fw-bold">Login to account</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="shadow-sm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="shadow-sm"
            />
          </Form.Group>
          <StyledButton>
            <Button className="button custom-btn btn-6" type="submit">
              Submit
            </Button>
          </StyledButton>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
