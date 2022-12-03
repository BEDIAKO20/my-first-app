import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCycle = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
          setUser([...res.data]);
        })
        .then((err) => {
          console.log(err);
        });

      //   await fetch("https://jsonplaceholder.typicode.com/users")
      //     .then((res) => {
      //       res.json();
      //     })
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .then((err) => {
      //       console.log(err);
      //     });
    };
    fetchData();
  }, []);

  return (
    <div>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.phone}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ApiCycle;
