import React from 'react'
import { Card, Button } from "react-bootstrap";
import memData from './membershipData';

const Membership = () => {
  return (
    <div>
    <h1>Membership Options</h1>
    {memData.map((membership, key) => (
    <Card key={key}>
      <Card.Body>
        <Card.Title>{membership.type}</Card.Title>
        <Card.Text>{membership.price}</Card.Text>
        <Card.Text>
          {membership.description}
        </Card.Text>
        <Button variant="primary" href="/signup" id={key}>
          Select Plan
        </Button>
      </Card.Body>
    </Card>
    ))}
  </div>
  )
}

export default Membership