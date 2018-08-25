import React, { Component } from 'react';
import Message from '../message';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome!</h1>
        </header>
        <div>

          {this.props.children}
        </div>
        <Message/>
      </div>
    );
  }
}

export default App;
