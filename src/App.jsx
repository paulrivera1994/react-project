import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My name is Paul</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is so cool!</p>
        <p>Writing stuff in paragraph</p>
        <ul>
          <li>random</li>
          <li>things</li>
          <li>in react</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
