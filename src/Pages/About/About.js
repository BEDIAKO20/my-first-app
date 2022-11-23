import React from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  let id = 623673258237623984;
  return (
    <div>
      About
      <button
        onClick={(e) => {
          navigate("/", { name: "Elkana" });
        }}
      >
        home
      </button>
      <button>
        <Link to={`/about/:${id}`}>to produts</Link>
      </button>
    </div>
  );
};

export default About;
