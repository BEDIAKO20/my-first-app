import logo from "./logo.svg";
import "./App.css";
import ClassProps from "./Components/ClassProps";
import FunctionProps from "./Components/FunctionProps";

function App() {
  let name = "Joyce";
  let image = [
    "https://images.unsplash.com/photo-1666270846993-2da43f4c7c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    " https://plus.unsplash.com/premium_photo-1664647949408-e588e1a920a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
  ];
  return (
    <div className="App">
      <ClassProps header={name} imageUrl={image} />
      <FunctionProps main={name} profilePic={image} />
    </div>
  );
}

export default App;
