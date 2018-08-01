import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { Howl } from 'howler';

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
    clearInterval(this.state.interval);
  }

  timer = () => {
    this.setState({
      ...this.state,
      alien: !this.state.alien
    })
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
        <Plus id="mask" pose={this.state.hovered ? "hovered" : "idle"}>
          +
        </Plus>
        <GrowingAlien id="dancing-alien" pose={this.state.hovered ? "hovered" : "idle"}>
          <img id="gif-alien" src={this.state.alien ? this.state.gifs[1] : this.state.gifs[0]}/>
        </GrowingAlien>
        <audio id="alien-song" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FThe%20Killers%20-%20Shadowplay%20(Live%20at%20The%20Royal%20Albert%20Hall)%20%5B1080p%5D%20(1).mp3?1532244457245" preload="auto" loop/>
      </div>
    );
  }
}

export default AddProject;