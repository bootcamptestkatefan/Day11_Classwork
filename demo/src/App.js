import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number'

class App extends Component {
  state= {number: 0}
  updateNumber = () => {
    this.setState({number: this.props.onClickWho(this.state.number)}); 
  }
  render() {
    return (
      <div>
        <button onClick={this.updateNumber}>Add 2</button>
        <span><Number /> {this.state.number}</span>

      </div>
    );
  }
}

export default App;