import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Description } from '../../intro-box/intro-box';

import './tedx.css';

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

const Circle = posed.div({
  idle: { 
    height: "4vw",
    width: "4vw",
    margin: "1vw 0.4vw",
    boxShadow: "-6px 5px 0px 1px rgba(0,0,0,1)",
    border: "2px solid black",
    borderRadius: "50%",
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    height: "15vw",
    width: "15vw",
    margin: "0vw 0vw",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
    border: "0px solid black",
    borderRadius: "0%",
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

const CircleTest = posed.div({
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

class TEDx extends Component {

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
        <Description className="detail-teal" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>A free community event based on the TED format. <br/> 
              I am the curator & director of the event that hosts <br/> 1500 attendees <br/> a year.
          </h1>
          <GIFCircle className="circle big">
            <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FTEDx.gif?1532931782003" />
          </GIFCircle>
        </Description>
        <h1>
          TEDxManagua
        </h1>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FTEDxMain.jpg?1532931639898"/>
        <p>
        </p>
        <CircleTest className="circle" pose={this.state.hovered ? "hovered" : "idle"}></CircleTest>
    </div>
    );
  }
}

export default TEDx;