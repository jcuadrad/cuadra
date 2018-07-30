import React, { Component } from 'react';

import './content-box.css';

class ContentBox extends Component {

  render() {
    const addedClasses = `shadow-box ${this.props.addedClass}`

    return (
      <div className={addedClasses}>
        {this.props.children}
      </div>
    );
  }
}

export default ContentBox;