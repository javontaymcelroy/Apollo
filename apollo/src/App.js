// --
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// --
import Home from './components/Home';
// --
import './App.css';
import Navigation from './components/Navigation';
// --

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='App'>
          <Navigation />
          <Route path='/' component={Home} />
        </div>
      </>
    );
  }
}

export default App;
