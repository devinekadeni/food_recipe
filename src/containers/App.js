import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomePage from './Home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
