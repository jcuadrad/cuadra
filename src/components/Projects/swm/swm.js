import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Description } from '../../intro-box/intro-box';

import './swm.css';

const GIFCircle = posed.div({
  idle: { 
    //height: 0,
    scale: 0,
    //width: 0,
    //opacity: 0,
    transition: {
      opacity: props => tween({ ...props, duration: 100, ease: easing.linear }),
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    delay: 300,
    scale: 1,
    //height: "7vw",
    //width: "7vw",
    //opacity: 1,
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

export const GrowingShape = posed.div({
  idle: { 
    scale: 1,
    borderWidth: "2px",
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    scale: 9,
    borderWidth: "0px",
    transition: props => tween({ ...props, duration: 400, ease: easing.linear })
  }
})

class SWM extends Component {

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
    <div className="shadow-box tedx" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-transparent right" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>
            Orginized the first Startup Weekend event in Managua, with the help of the most wonderful team.
          </h1>
          <GIFCircle className="circle big left">
            <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fsw.gif?1533110983713" alt="swm-gif"/>
          </GIFCircle>
        </Description>
        <h1>
          Startup Weekend Managua
        </h1>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fsw2.jpg?1533109701792" alt="swm-main" />
        <p>
        </p>
        <GrowingShape className="circle sw" pose={this.state.hovered ? "hovered" : "idle"}></GrowingShape>
    </div>
    );
  }
}

export default SWM;