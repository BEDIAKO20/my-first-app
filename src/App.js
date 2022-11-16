import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Components/Form";
import Users from "./Components/Users";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { name: "Sarah", gen: 23, id: "svdjvsdiugiuiiyiy309" },
        { name: "Elkanah", gen: 23, id: "kjerhohhithoh89y58ndfn" },
        { name: "Joshua", gen: 23, id: "jbjdbiuehi985498u89kn" },
        { name: "Sam", gen: 23, id: "jgdfs72tt74g98y20idl" },
        { name: "Esther", gen: 23, id: "jhsgduyw78t483t834dn" },
      ],
    };
  }

  deleteStudent = (student_id) => {
    let newStudents = this.state.students.filter(
      (student) => student_id !== student.id
    );
    this.setState({
      students: newStudents,
    });
  };

  addNewStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent],
    });
  };

  editStudent = (student_id, newDetails) => {
    this.setState({
      students: this.state.students.map((student) => {
        if (student_id == student.id) {
          return newDetails;
        } else {
          return student;
        }
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={6}>
              <Form addStudent={this.addNewStudent} />
            </Col>
            <Col md={6}>
              <Users
                students={this.state.students}
                editUser={this.editStudent}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
