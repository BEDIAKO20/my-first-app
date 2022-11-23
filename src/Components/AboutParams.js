import React from "react";
import { useParams } from "react-router-dom";

const AboutParams = () => {
  const id = useParams();
  console.log(id);

  return <div>About prams</div>;
};

export default AboutParams;
