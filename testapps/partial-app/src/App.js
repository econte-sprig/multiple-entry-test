import logo from './logo.svg';
import './App.css';
import "entry-test/click-logger";
import { attach } from "entry-test/core";

function App() {
  return (
    <div ref={(r) => attach(r)} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
