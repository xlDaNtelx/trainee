import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {

    const { loading } = this.props;
    return(
      <div id="loader" className={loading ? 'show' : 'hide'}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="lading"></div>
    </div>
    )
  }
}

export default Loader;