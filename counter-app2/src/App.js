import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <Counter counterInitValue={15} />
    </div>
  );
};

export default App;
