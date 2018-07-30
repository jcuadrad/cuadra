import React, { Component } from 'react';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';

import './intro-box.css';

export const Description = posed.div({
  idle: { 
    height: 0,
    opacity: 0,
    transition: {
      opacity: props => tween({ ...props, duration: 100, ease: easing.linear }),
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  hovered: { 
    delay: 100,
    height: "100%",
    opacity: 1,
    transition: props => tween({ ...props, duration: 200, ease: easing.linear })
  }
})

const EasterEgg = posed.div({
  idle: { 
    opacity: 0,
    transition: {
      opacity: props => tween({ ...props, duration: 100, ease: easing.linear }),
      default: props => tween({ ...props, duration: 200, ease: easing.linear })
    }
   },
  clicked: { 
    opacity: 1,
    transition: props => tween({ ...props, duration: 100, ease: easing.linear })
  }
})

class IntroBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    }
  }

  showDescription = () => {
    console.log("Hovered!")
    this.setState({
      ...this.state,
      hovered: true
    })
  }

  showEasterEgg = () => {
    this.setState({
      ...this.state,
      clicked: true
    })
  }

  reset = () => {
    this.setState({
      hovered: false,
      clicked: false
    })
  }

  render() {
    return (
      <div className="shadow-box desc" onMouseEnter={() => this.showDescription()} onClick={() => this.showEasterEgg()}
           onMouseLeave={() => this.reset()} >
        <EasterEgg pose={this.state.clicked ? "clicked" : "idle"} className="easter">
            <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FMeWeb.jpg?1532355463534" alt="me"/>
            <p>
              <span>Easter egg:</span> That's how I look.
            </p>
        </EasterEgg>
        <Description pose={this.state.hovered ? "hovered" : "idle"} className="cover">
          <h1>
            I love creating connections between teams and to grow communities.
          </h1>
          <h1 className="hyphen">
            -
          </h1>
          <h1>
            Love music, movies, comics & sports! Check out some of my work →
          </h1>
        </Description>
        <div className="description">
          <h1 id="letter">
            J
          </h1>
          <h1 className="variable">
            Hey! <br/> I'm Juan. Engineer, developer & project manager.
          </h1>
        </div>
      </div>
    );
  }
}

export default IntroBox;