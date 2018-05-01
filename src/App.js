import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: 'React'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.name}</h1>
        </header>
        <button onClick={e => this.setState({ name: 'Tyler' })}>Click Me</button>
      </div>
    );
  }
}

export default App;
