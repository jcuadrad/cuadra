import React, { Component } from 'react';

import './header.css';
import logo from '../../assets/JC.png'

class Header extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <img src={logo} />
        </div>
        <h1>
          . . .
        </h1>
      </header>
    );
  }
}

export default Header;