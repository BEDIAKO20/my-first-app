import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditForm = (props) => {
  const [studentName, setStudentName] = useState(props.edit.name);
  const [studentGen, setStudentGen] = useState(props.edit.gen);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEditedData = {
      name: studentName,
      gen: studentGen,
      id: props.edit.id,
    };
    props.editUser(props.edit.id, newEditedData);
  };

  return (
    <div>
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
    </div>
  );
};

export default EditForm;
