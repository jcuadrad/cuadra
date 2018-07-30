import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import IntroBox from './components/intro-box/intro-box';
import TEDx from './components/Projects/tedx/tedx';
import IbaVR from './components/Projects/iba/iba';
import Melode from './components/Projects/melode/melode';
import Hub from './components/Projects/hub/hub';
import TMG from './components/Projects/tmg/tmg';

class App extends Component {
  render() {
    return (
      <div id="page">
        <Header/>
        <div id="main-container">
          <IntroBox />
          <TEDx />
          <IbaVR />
          <Melode />
          <Hub />
          <TMG />
        </div>
      </div>
    );
  }
}

export default App;
