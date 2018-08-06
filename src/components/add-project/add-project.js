import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './add-project.css';

const GrowingAlien = posed.div({
  idle: {
    scale: 0,
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    scale: 1,
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

const Contact = posed.div({
  idle: {
    scale: 0,
    bottom: "0vw",
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    delay: 300,
    bottom: "7vw",
    scale: 1,
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

const Plus = posed.h1({
  idle: {
    scale: 1,
    transition: {
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: {
    scale: 0,
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

class AddProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      song: new Howl({
        src: ['https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FThe%20Killers%20-%20Shadowplay%20(Live%20at%20The%20Royal%20Albert%20Hall)%20%5B1080p%5D%20(1).mp3?1532244457245'],
        loop: true,
        preload: true,
        volume: 0.5,
      }),
      gifs: ["https://media.giphy.com/media/YGIpIZjgxL68w/giphy.gif", "https://media.giphy.com/media/NAYCJNIumrb6o/source.gif"],
      alien: true,
      interval: null
    }
  }

  componentDidMount() {
    var interval = setInterval(this.timer, 4000);
    this.setState({...this.state, interval: interval});
    console.log(this.state);
  }

  componentWillUnmount() {
    //clearInterval(this.state.interval);
  }

  timer = () => {
    this.setState({
      ...this.state,
      alien: !this.state.alien
    })
    console.log("Alien? " + this.state.alien);
  }

  danceAlien = () => {
    console.log("Hovered!")
    this.state.song.play();
    this.setState({
      hovered: true
    })
  }

  stopAlien = () => {
    console.log("Hovered!")
    this.state.song.pause();
    this.setState({
      hovered: false
    })
  }

  render() {

    return (
      <div onMouseEnter={() => this.danceAlien()} onMouseLeave={() => this.stopAlien()}>
        <Contact id="contact" pose={this.state.hovered ? "hovered" : "idle"}>
          <div className="email">
            <h1>Let's build something awesome together! Shoot me a message</h1>
          </div>
          <div className="social-media-icons">
            <div className="social-icon">
              <a href="mailto:juan@cuadra.io?subject=Hey!%20I%20have%20a%20cool%20idea!">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/juancuadrad/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.instagram.com/juancuadra/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
            </div>
          </div>
        </Contact>
        <Plus id="mask" pose={this.state.hovered ? "hovered" : "idle"}>
          +
        </Plus>
        <GrowingAlien id="dancing-alien" pose={this.state.hovered ? "hovered" : "idle"}>
          <img id="gif-alien" src={this.state.alien ? this.state.gifs[1] : this.state.gifs[0]} alt="gif-alien"/>
        </GrowingAlien>
      </div>
    );
  }
}

export default AddProject;