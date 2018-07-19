import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

/**
 * Show loader while books are loading.
 */
class Loader extends Component {
  render() {
    const { loading, opacity } = this.props;
    return (
      <div id="loader" className={loading ? 'show' : 'hide'} style={{ opacity }}>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="lading" />
      </div>
    );
  }
}

Loader.propTypes = {
  /** State of loading page */
  loading: PropTypes.bool.isRequired,
  /** Opacity for loader container */
  opacity: PropTypes.number.isRequired,
};

export default Loader;
