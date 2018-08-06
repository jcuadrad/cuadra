import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Description } from '../../intro-box/intro-box';

import './melode.css';

const GrowingLetter = posed.h1({
  idle: { 
    scale: 1,
    bottom: "-6vw",
    borderWidth: "2px",
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    scale: 8.8,
    bottom: "0vw",
    borderWidth: "0px",
    transition: props => tween({ ...props, duration: 300, ease: easing.linear })
  }
})

class Melode extends Component {

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
      <div className="shadow-box melode" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-purple" pose={this.state.hovered ? "hovered" : "idle"}>
          <div className="crop">
            <img id="melode-gif" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FMelode.gif?1532983407806" alt="melode-gif"/>
          </div>
          <h1>A "tinder" for Music lyrics. <br/> <br/> This was my first full-stack app and it was built in two weeks.</h1>
        </Description>
        <h1>
          Melode
        </h1>
        <GrowingLetter id="play" pose={this.state.hovered ? "hovered" : "idle"}>
          ‣
        </GrowingLetter>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FMelode.png?1532637830308" alt="melode-main" />
      </div>
    );
  }
}

export default Melode;