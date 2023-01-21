import React, { useState } from "react";
import GetDataRedux from "./Components/getData_redux";
import { useDispatch } from "react-redux";
import {
  addNewFemaleStudent,
  addNewMaleStudent,
} from "./redux/reducers/students_reducer";

const App = () => {
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudents = {
      name,
      gen,
    };

    dispatch(addNewFemaleStudent(newStudents));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
        <br />
        <button>submit</button>
      </form>

      <GetDataRedux />
    </div>
  );
};

export default App;
