import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import IntroBox from './components/intro-box/intro-box';
import TEDx from './components/Projects/tedx/tedx';
import IbaVR from './components/Projects/iba/iba';
import Melode from './components/Projects/melode/melode';
import Hub from './components/Projects/hub/hub';
import TMG from './components/Projects/tmg/tmg';
import Maderas from './components/Projects/maderas/maderas';
import Kakao from './components/Projects/kakao/kakao';
import Jakoo from './components/Projects/jakoo/jakoo';
import SWM from './components/Projects/swm/swm';
import AddProject from './components/add-project/add-project';

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
          <Maderas />
          <Kakao />
          <Jakoo />
          <SWM />
        </div>
        <AddProject />
      </div>
    );
  }
}

export default App;
