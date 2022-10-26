import logo from "./logo.svg";
import "./App.css";
import ClassState from "./Components/ClassState";
import FunctionState from "./Components/FunctionState";

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassState />
      <hr />
      <h1>Functional Component</h1>
      <FunctionState />
    </div>
  );
}

export default App;
