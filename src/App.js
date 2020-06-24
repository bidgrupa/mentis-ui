import React, {useState}     from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Count: {count}
        </p>
        <button
          className="App-link"
          onClick={() => {setCount(count + 1)}}
        >
          Learn React
        </button>
    <button
    className="App-link"
    onClick={() => {setCount(count - 1)}}
>
    -1
    </button>
      </header>
    </div>
  );
}

export default App;
