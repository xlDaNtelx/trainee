import React from 'react'
import Child from './Child';
import Modal from './Modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeActivity} from '../store/actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

const modalRootState = 'modal-root-redux';

class MainComponent extends React.Component {
  render() {
    const { isActive, changeActivity } = this.props;
    return <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button data-target="#redux-modal" data-toggle="modal" className="btn-styler" onClick={() => {
            changeActivity(isActive);
          }}>
          Click me
        </button>
        <Modal modalRoot={modalRootState}>
          <Child
            id="redux-modal" 
            buttonLabel="Click me" 
            onClick={ () => {
              changeActivity(isActive);
            }
          }
          isActive={isActive}
        />
        </Modal>
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

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }

//   componentDidMount() {
//     modalRootState.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRootState.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(
//       this.props.children,
//       this.el,
//     );
//   }
// }



export default connect(mapStateToProps, mapActionsToProps)(MainComponent);