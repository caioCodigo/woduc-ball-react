import React, { Component } from 'react';
import Navbar from  './componentes/navbar';
import './App.css';
import Header from './componentes/header';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Header />
      </div>
    );
  }
}

export default App;
