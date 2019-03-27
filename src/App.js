import React, { Component } from 'react';
import { Route } from "react-router-dom"; 

import Home from './Components/Home';
import AvengersList from './Components/AvengersList';

import avengers from './data';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      avengers: avengers
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AvengersList} />
      </div>
    );
  }
}

export default App;
