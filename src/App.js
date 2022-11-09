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
        { name: "Sarah", gen: 23 },
        { name: "Elkanah", gen: 23 },
        { name: "Joshua", gen: 23 },
        { name: "Sam", gen: 23 },
        { name: "Esther", gen: 23 },
      ],
    };
  }

  addNewStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent],
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
              <Users students={this.state.students} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
