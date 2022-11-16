import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const Forms = (props) => {
  const [studentName, setStudentName] = useState("");
  const [studentGen, setStudentGen] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name: studentName,
      gen: studentGen,
      id: uuidv4(),
    };
    console.log(newStudent);
    props.addStudent(newStudent);
  };

  return (
    <div>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>StudentName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              value={studentGen}
              placeholder="Enter Gen"
              onChange={(e) => {
                setStudentGen(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Forms;
