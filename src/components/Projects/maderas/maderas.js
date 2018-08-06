import React, { Component } from 'react';
import { Description } from '../../intro-box/intro-box';

import './maderas.css';

class Maderas extends Component {

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
    <div className="shadow-box maderas" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-teal" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>
            NY-based furniture company. I created their website and marketing materials.
          </h1>
          <div className="gif-cropper">
            <img id="maderas-gif" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fmaderas.gif?1533091713812" alt="maderasgif"/>
          </div>
        </Description>
        <h1>
          Maderas Collective
        </h1>
        <img id="boom" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FmaderasBam.png?1533071988545" alt="boom"/>
        <h1 id="hashtag" pose={this.state.hovered ? "hovered" : "idle"}>
          #
        </h1>
    </div>
    );
  }
}

export default Maderas;