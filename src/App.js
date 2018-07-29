import React, { Component } from 'react';
import Header from './components/header/header';
import IntroBox from './components/intro-box/intro-box';
import ContentBox from './components/content-box/content-box';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Header/>
        <div id="main-container">
          <IntroBox />
          <ContentBox>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default App;
