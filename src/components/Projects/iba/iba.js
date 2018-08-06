import React, { Component } from 'react';
import { Description } from '../../intro-box/intro-box'

import './iba.css';

class IbaVR extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  showDescription = () => {
    console.log("Hovered!")
    this.setState({
      hovered: true
    })
  }

  render() {
    return (
      <div className="shadow-box iba" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-yellow" pose={this.state.hovered ? "hovered" : "idle"}>
          <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FIba.gif?1532977427928" alt="iba-gif"/>
          <h1>One of my favorite projects to work on. An upcoming VR experience built with Unity for the Oculus Go.</h1>
        </Description>
        <h1>
          Iba Virtual Bakery Tours
        </h1>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FIba.jpg?1533091628374" alt="iba-main" />
        <img className="decor" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fvr.png?1532634152006" alt="decor" />
      </div>
    );
  }
}

export default IbaVR;