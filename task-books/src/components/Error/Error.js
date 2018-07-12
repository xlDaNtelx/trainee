import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import './Error.css';

class Error extends React.Component {
  render() {
    const { error } = this.props;
    return(
      <Alert color="danger" className={error ? 'showError' : 'hideError'}>
        {error}
      </Alert>
    )
  }
}

Error.propTypes = {
  error: PropTypes.string
};

Error.defaultProps = {
  error: ''
};

export default Error;