import React from 'react';
import { Alert } from 'reactstrap';

class EmptyData extends React.Component {
  render() {
    return (
      <Alert color="warning">
        Sorry there are no books, happens with the best of us.
      </Alert>
    );
  }
}

export default EmptyData;
