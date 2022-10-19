import React from "react";

const FunctionalProps = (props) => {
  let weight = props.userWeight;
  return (
    <div>
      <h1>{weight}</h1>
    </div>
  );
};

export default FunctionalProps;
