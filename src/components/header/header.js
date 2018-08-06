import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';

import './header.css';
import logo from '../../assets/JC.png'

class Header extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>
          . . .
        </h1>
      </header>
    );
  }
}

export default Header;