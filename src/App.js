import React, { Component } from 'react';
import './bg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 style={{fontWeight: '300', fontSize: 40}}>Hi, I'm Darius</h2>
        </div>
        <p className="App-intro">
          Let's get started.
        </p>
        <div className="App-footer" />
      </div>
    );
  }
}

export default App;
