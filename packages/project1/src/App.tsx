import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from '@vt/shared';

function App() {
  const [state, setState] = useState('state');

  useEffect(() => {
    setState('CRA web 1');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greeting whom="Project 1" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {state}
        </a>
      </header>
    </div>
  );
}

export default App;
