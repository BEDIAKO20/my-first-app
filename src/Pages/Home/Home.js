import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <button>
        <Link to="about">About</Link>
      </button>
      <button>
        <Link to="contact">Contact</Link>
      </button>
    </div>
  );
};

export default Home;
