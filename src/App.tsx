import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Components app.</p>
        <p>In root drc type: 'npm run storybook' to open components store.</p>
      </header>
    </div>
  );
}

export default App;
