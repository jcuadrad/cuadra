import React, { Component } from 'react';
import { Description } from '../../intro-box/intro-box'

import './kakao.css';

class Kakao extends Component {

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
      <div className="shadow-box kakao" onMouseEnter={() => this.showDescription()} onMouseLeave={() => {this.setState({ hovered: false })}}>
        <Description className="detail-yellow" pose={this.state.hovered ? "hovered" : "idle"}>
          <h1>My first dive into the web. Helping a bootstrapped agency grow in a developing economy.</h1>
          <img id="ipad-gif" src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FBam.gif?1533101991121" alt="timelapse"/>
        </Description>
        <h1>
          Kakao <br /> Media
        </h1>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2Fkakaotest.jpg?1533100660742" alt="kakao-main"/>
        <h1 className="letter-yellow">
          K
        </h1>
      </div>
    );
  }
}

export default Kakao;