import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Description } from '../../intro-box/intro-box'

import './tmg.css';

const IPad = posed.img({
  idle: { 
    scale: 0,
    transition: {
      opacity: props => tween({ ...props, duration: 100, ease: easing.linear }),
      default: props => tween({ ...props, duration: 30, ease: easing.linear })
    }
   },
  hovered: {
    scale: 1,
    transition: props => tween({ ...props, duration: 30, ease: easing.linear })
  }
})

class TMG extends Component {

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

    const topView = {
      zIndex: "99999"
    }

    const normalView = {
      zIndex: "0"
    }

    return (
      <div className="shadow-box tmg" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-tmg" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>Tele München's movie catalogue iPad app.</h1>
          {/* <IPad id="ipad-gif" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FTMGScreenVideo.gif?1533021812669"/> */}
        </Description>
        <h1>
          TMG Showroom
        </h1>
        <img 
        src={this.state.hovered ? "https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FTMGScreenVideo.gif?1533021812669" : 
        "https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FtmgCover.png?1533069041588"}
        style={this.state.hovered ? topView : normalView}/>
        <p>
        </p>
        <h1 className="letter">
          ®
        </h1>
      </div>
    );
  }
}

export default TMG;