import React from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";

const User = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.student.name}
          </Card.Subtitle>
          <Card.Title>Gen</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.student.gen}
          </Card.Subtitle>
          <Card.Link href="#">Edit</Card.Link>
          {"     "}
          <Button href="#" variant="danger" size="sm">
            delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
