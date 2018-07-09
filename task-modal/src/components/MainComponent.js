import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ModalExample from './Modal';
import {changeActivity} from '../store/actions'


class MainComponent extends React.Component {
  render() {
    const { isActive, changeActivity } = this.props;
    return <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn-styler" onClick={() => {
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
    <div className={`modal ${props.isActive ? '' : 'disabled'}`} onClick={props.onClick}>
      <div className="modal-container">
        <div className="modal-header">Form with Redux</div>
        <div className="modal-content">
          Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
          Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
          Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
          Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
          Eu cillum elit voluptate consequat officia tempor eu ea sit sint.
        </div>
        <button className="modal-btn">Click</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);