import React from "react";

const FunctionProps = (props) => {
  //console.log(props);
  let footerName = props.footer;
  let profile = props.profilePic;
  return (
    <div>
      <h1> Goodbye {footerName}</h1>
      <img src={profile[0]} />
    </div>
  );
};

export default FunctionProps;
