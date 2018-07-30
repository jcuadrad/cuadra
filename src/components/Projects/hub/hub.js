import React, { Component } from 'react';
import { Description } from '../../intro-box/intro-box'

import './hub.css';

class Hub extends Component {

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
      <div className="shadow-box hub" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-yellow" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>JUAN</h1>
        </Description>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FScreen%20Shot%202018-07-26%20at%204.13.57%20PM.png?1532643350987"/>
        <h1>
          The Hub
        </h1>
        <h1 id="variable">
          {"{ }"}
        </h1>
      </div>
    );
  }
}

export default Hub;