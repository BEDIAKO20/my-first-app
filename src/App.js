import logo from "./logo.svg";
import "./App.css";
import Header2 from "./Componets/Header";
import NavBar from "./Componets/NavBar";

function App() {
  return (
    <div className="App">
      <button>Send</button>
      <Header2 />
      <NavBar />
      <NewComponent />
    </div>
  );
}

function NewComponent() {
  return (
    <>
      <h1>Codetrain is awesome!!!</h1>
    </>
  );
}

export default App;
