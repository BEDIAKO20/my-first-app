import React from "react";
import { useSelector } from "react-redux";

const GetDataRedux = () => {
  const data_students = useSelector((state) => state.student);
  console.log(data_students);
  const { students_male } = data_students;
  const { students_female } = data_students;

  return (
    <div>
      <h1>Student boys</h1>
      <hr />
      {students_male.map((item) => {
        return (
          <div>
            {item.name}
            <br />
            {item.gen} <hr />
          </div>
        );
      })}
      <hr />
      <h1>Student Girls</h1>
      {students_female.map((item) => {
        return (
          <div>
            {item.name}
            {item.gen} <hr />
          </div>
        );
      })}
    </div>
  );
};

export default GetDataRedux;
