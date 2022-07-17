import React, { Component } from 'react';
import { HousesList } from './components/HousesList.js';
import './App.css';

//so you can just call the component, not react.component
class App extends Component {
  render() {
    return (
      <div className='card'>
        <HousesList  />
      </div>
    )
  }
}

export default App;