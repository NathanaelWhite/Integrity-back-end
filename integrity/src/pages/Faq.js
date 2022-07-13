import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function Faq() {
  return (
    <>
      <h1 className="text-center my-5">Frequently Asked Questions(FAQ)</h1>
      <Container className="p-10">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" action variant="danger">
            <Accordion.Header >How much does it cost to join?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What different contract lengths does Integrity Fitness offer? Can I pay on a month-by-month basis?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you offer a discount for family or joint membership options?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you offer student, senior, or military discounts?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I cancel my membership?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q. How much does it cost to join?</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5"> */}
        {/* <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="p-10">
          <ListGroup.Item action variant="danger">
            <h2>Q.</h2>
          </ListGroup.Item>

          <ListGroup.Item action variant="light" className="mb-5">
            <h2>A.</h2>
          </ListGroup.Item>
        </ListGroup> */}
      </Container>
    </>
  );
}
