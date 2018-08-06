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
        <Description className="detail-white" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1 id="hub-top-desc" className="hub-desc">A Nicaraguan coding school for kids.</h1>
          <img id="hub-logo" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FHubLogo.gif?1532993469764" alt="hub-logo"/>
          <h1 className="hub-desc">Concept and market research for my dream project.</h1>
        </Description>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fhubkid.jpg?1532994828410" alt="hub-main"/>
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