import React, { Component } from 'react';

import './melode.css';

class Melode extends Component {

  render() {
    return (
      <div className="shadow-box melode">
        <h1>
          Melode
        </h1>
        <h1 id="play">
          ‣
        </h1>
        <img src="https://cdn.glitch.com/7103bbf0-76c6-4ae7-9ec3-4d7ce5786163%2FMelode.png?1532637830308"/>
      </div>
    );
  }
}

export default Melode;