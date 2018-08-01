import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Description } from '../../intro-box/intro-box';

import './jakoo.css';

const GrowingTab = posed.div({
  idle: {
    scale: 1,
    width: "3.8vw",
    height: "1.59vw",
    bottom: "1vw",
    right: "1.2vw",
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    scale: 2,
    width: "15vw",
    height: "15vw",
    bottom: "0",
    right: "0",
    transition: props => tween({ ...props, duration: 400, ease: easing.linear })
  }
})

class Jakoo extends Component {

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
    <div className="shadow-box jakoo" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-transparent centered-row" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>
            Front end development for present finder app. <br/><br/>Jako-o is one of the biggest toy stores in Germany.
          </h1>
          <img id="jakoo-gif" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fjakoo-screen.gif?1533108329601" alt="maderasgif"/>
        </Description>
        <h1>
          Jako-o Kid Store
        </h1>
        <img id="bird" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fjakoologo3.png?1533105442418"/>
        <GrowingTab id="tab" pose={this.state.hovered ? "hovered" : "idle"}></GrowingTab>
    </div>
    );
  }
}

export default Jakoo;