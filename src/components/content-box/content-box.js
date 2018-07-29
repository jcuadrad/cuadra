import React, { Component } from 'react';

import './content-box.css';

class ContentBox extends Component {

  render() {
    return (
      <div className="shadow-box desc">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBox;