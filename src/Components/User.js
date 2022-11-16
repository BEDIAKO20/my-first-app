import React, { useState } from "react";
import { Card, Col, Row, Container, Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Col>
        <Card style={{ width: "14rem" }}>
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.student.name}
            </Card.Subtitle>
            <Card.Title>Gen</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.student.gen}
            </Card.Subtitle>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            {"     "}
            <Button href="#" variant="danger" size="sm">
              delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
      {/* Code for Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm edit={props.student} editUser={props.editUser} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
