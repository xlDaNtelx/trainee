import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

class Child extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={`fade modal ${this.props.isActive ? '' : 'disabled'}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.id.toUpperCase()}</h5>
              <button type="button" onClick={this.props.onClick} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
                Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
                Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
                Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.props.onClick} data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.onClick} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Child.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Child;