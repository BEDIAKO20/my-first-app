import React, { useState } from "react";

const FunctionState = () => {
  const [number, setNumber] = useState(0);

  const handleIncrease = (e) => {
    e.preventDefault();

    setNumber(number + 1);
  };

  console.log("functional comp");

  return (
    <div>
      <br />
      <h1>{number}</h1>
      <br />
      <button onClick={handleIncrease}>increase</button>
      <button
        onClick={(e) => {
          setNumber(number - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default FunctionState;
