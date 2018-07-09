import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ModalExample from './Modal';
import {changeActivity} from '../store/actions'
import 'bootstrap/dist/js/bootstrap.min.js';


class MainComponent extends React.Component {
  render() {
    const { isActive, changeActivity } = this.props;
    return <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button data-target="#redux-modal" data-toggle="modal" className="btn-styler" onClick={() => {
            changeActivity(isActive);
          }}>
          Click me
        </button>
        <Child buttonLabel="Click me" 
        onClick={ () => {
            changeActivity(isActive);
          }
        }
        isActive={isActive}
        />
        <p className="label-styler">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status: {isActive.toString()}</p>
      </div>
  };
};

// putStateToProps
const mapStateToProps = (state) => {
  return {
    isActive: state.isActive 
  };
};

// const mapActionsToProps = {changeActivity};
const mapActionsToProps = (dispatch) => {
  return {
    changeActivity: bindActionCreators(changeActivity, dispatch),
  };
};

function Child(props) {
  return (
    <div id="redux-modal" className={`fade modal ${props.isActive ? '' : 'disabled'}`} tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" onClick={props.onClick} className="close" data-dismiss="modal" aria-label="Close">
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
            <button type="button" className="btn btn-secondary" onClick={props.onClick} data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={props.onClick} data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);