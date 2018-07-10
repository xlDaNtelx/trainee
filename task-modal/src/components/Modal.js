import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.modalRoot);
    this.modalRootState = document.getElementById(props.modalRoot);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.modalRootState.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRootState.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

Modal.propTypes = {
  modalRoot: PropTypes.string
};

export default Modal;