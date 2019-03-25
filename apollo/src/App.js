// --
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// --
import Home from './components/Home';
// --
import './App.css';
// --

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Route path='/' component={Home} />
        </div>
      </>
    );
  }
}

export default App;
