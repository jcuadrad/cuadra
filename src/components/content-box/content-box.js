import React, { Component } from 'react';
import './content-box.css';

class ContentBox extends Component {
  render() {
    return (
      <div class="shadow-box desc">
        <div class="description">
          <h1 id="letter">
            J
          </h1>
          <h1 class="variable">
            Hey! <br/> I'm Juan. Engineer, developer & project manager.
          </h1>
        </div>
      </div>
    );
  }
}

export default ContentBox;