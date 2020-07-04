import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(param) {
  return (
    <div className="App">
      <h1>{param.name}</h1>
    </div>
  );
}

export default App;
