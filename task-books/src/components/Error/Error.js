import './Error.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

/**
 * Show alert if was error in get books request.
 */
class Error extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <Alert color="danger" className={error ? 'showError' : 'hideError'}>
        {error}
      </Alert>
    );
  }
}

Error.propTypes = {
  /** Error that happens in request */
  error: PropTypes.string
};

Error.defaultProps = { error: '' };

export default Error;
