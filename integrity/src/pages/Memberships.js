import React from "react";
import { Card, Button } from "react-bootstrap";

export default function memberships() {
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
      <Card>
        <Card.Body>
          <Card.Title>Couples Unlimited / Month</Card.Title>
          <Card.Text>$170 - Billed Monthly until cancelled</Card.Text>
          <Card.Text>
            Membership option for couples to attend unlimited Group Classes and
            Open Gym throughout the month.
          </Card.Text>
          <Button variant="primary" href="#signup">
            Select Plan
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>3x / Week</Card.Title>
          <Card.Text>$95 - Billed Monthly until cancelled</Card.Text>
          <Card.Text>
            The 3 attendances per week plan allows the member to attend Group
            Classes and/or Open Gym for up to 3 days per week. The week begins
            on Sunday and ends on Saturday.
          </Card.Text>
          <Button variant="primary" href="#signup">
            Select Plan
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
