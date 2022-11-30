import React, { useEffect, useState } from "react";

const FunctionalLifeCyle = () => {
  const [data, setData] = useState([{ id: "Hello world" }]);

  useEffect(() => {
    const func = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((gen23) => {
          setData(gen23);
          console.log(gen23);
        })
        .then((error) => {
          console.log(error);
        });
    };
    func();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1663013176126-165391bccc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" />
            <br />
            {item.title}
            <br />
            {item.id}
            <br />
            {item.userId}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FunctionalLifeCyle;
