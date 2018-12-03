import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {number: 1}
  updateNumber = () => {
    alert(this)
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.updateNumber}>click me</button>
        <span>number: {this.state.number}</span>

      </div>
    );
  }
}

export default App;
