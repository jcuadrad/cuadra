import React, { Component } from 'react';
import Header from './components/header/header';
import ContentBox from './components/content-box/content-box';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Header/>
        <div id="main-container">
          <ContentBox />
        </div>
      </div>
    );
  }
}

export default App;
