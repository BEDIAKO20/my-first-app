import logo from "./logo.svg";
import "./App.css";
import ClassProps from "./Components/ClassProps";
import FunctionalProps from "./Components/FunctionalProps";

function App() {
  let height = "6.2ft";
  let weight = "87kg";
  return (
    <div className="App">
      <ClassProps userHeight={height} />
      <FunctionalProps userWeight={weight} />
    </div>
  );
}

export default App;
