import React from "react";
import { Container, Table } from "react-bootstrap";

export default function Schedule() {
  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Integrity Fit</th>
            <th>Open Gym</th>
            <th>Row and Flow</th>
            <th>Buns and Guns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>5:15am, 12:00pm, 4:30pm, 5:30pm</td>
            <td>1-4pm</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>5:15am, 12:00pm, 4:30pm, 5:30pm</td>
            <td>1-4pm</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>5:15am, 12:00pm, 4:30pm, 5:30pm</td>
            <td>1-4pm</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td></td>
            <td>1-4pm</td>
            <td>5:15am, 12:00pm, 5pm</td>
            <td></td>
          </tr>
          <tr>
            <td>Friday</td>
            <td></td>
            <td>1-5pm</td>
            <td>5:15am, 12:00pm, 5pm </td>
            <td></td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td></td>
            <td> 9-11am</td>
            <td></td>
            <td>8am </td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>CLOSED</td>
            <td>CLOSED</td>
            <td>CLOSED</td>
            <td>CLOSED</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
