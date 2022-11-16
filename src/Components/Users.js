import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";

const Users = (props) => {
  let students = props.students;
  return (
    <div>
      {students.map((item) => {
        return (
          <div key={item.id}>
            <Row>
              <User student={item} editUser={props.editUser} />
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
