import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from '@vt/shared';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greeting whom="Project 2" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CRA web 2
        </a>
      </header>
    </div>
  );
}

export default App;
