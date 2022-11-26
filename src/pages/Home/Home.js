import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props, routes) => {
  console.log(routes);
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </div>
  );
};

export default Home;
