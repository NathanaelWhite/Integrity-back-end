import React from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import StyledButton from "../Styles/StyledButton";
import { GeoAltFill } from "react-bootstrap-icons";
import { Icon } from "@iconify/react";
import image from "../assets/images/contact.jpg";
import styled from "styled-components";

const StyledContact = styled.div`
  background-image: url(${image});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
function Contact() {
  return (
    <StyledContact>
      <Container className="bg-light border p-5 rounded shadow bg-body opacity-75">
        <Row>
          <Col sm={8}>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  className="shadow-sm"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  className="shadow-sm"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="shadow-sm"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter phone number"
                  className="shadow-sm"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="recaptcha">
                <Form.Label>recaptcha</Form.Label>
                <Form.Control
                  type=""
                  placeholder="recaptcha"
                  className="shadow-sm"
                />
              </Form.Group>
              <StyledButton>
                <Button type="submit" className="button custom-btn btn-6">
                  Submit
                </Button>
              </StyledButton>
            </Form>
          </Col>
          <Col sm={4} className="p-3">
            <Stack gap={2} className="col-md-5 mx-auto pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.3918381964754!2d-97.11345978484755!3d31.59572128134484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f82bed3199003%3A0x7af553e731dc5deb!2s1501%20Hogan%20Ln%2C%20Waco%2C%20TX%2076705!5e0!3m2!1sen!2sus!4v1645490767559!5m2!1sen!2sus"
                width="175"
                height="175"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="integrity-gym"
              ></iframe>
              <p className="pt-3">
                <GeoAltFill /> 1501 Hogan Ln Waco TX, 76705
              </p>
              <p>
                <Icon icon="ic:outline-email" /> emailaddress
              </p>
              <p>
                <Icon icon="el:globe" /> website
              </p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </StyledContact>
  );
}

export default Contact;
