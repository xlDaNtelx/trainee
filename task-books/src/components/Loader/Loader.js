import React, { Component } from 'react';
import './Loader.css';
import PropTypes from 'prop-types';

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

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  loading: false
};

export default Loader;