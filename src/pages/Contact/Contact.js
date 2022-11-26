import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div>
      Contact
      <button
        onClick={() => {
          navigate("/", { name: "habib" });
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Contact;
