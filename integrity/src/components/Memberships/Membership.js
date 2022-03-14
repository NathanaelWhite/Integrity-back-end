import React from 'react'
import { Card, Button } from "react-bootstrap";
import memData from './membershipData';

const Membership = () => {
  return (
    <div>
    <h1>Membership Options</h1>
    <Card>
      <Card.Body>
        <Card.Title>Unlimited / Month</Card.Title>
        <Card.Text>$120 - Billed Monthly until cancelled</Card.Text>
        <Card.Text>
          Our most common membership option for attending unlimited Group
          Classes and Open Gym throughout the month.
        </Card.Text>
        <Button variant="primary" href="#signup">
          Select Plan
        </Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Membership