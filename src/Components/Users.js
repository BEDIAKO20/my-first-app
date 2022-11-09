import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";

const Users = (props) => {
  let students = props.students;
  return (
    <div>
      {students.map((item) => {
        return (
          <div>
            <Row>
              <Col md={4}>
                <User student={item} />
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
