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
        <ModalExample buttonLabel="Click me" 
        onClick={ () => {
            changeActivity(isActive);
          }
        }
        isActive={isActive}
        />
        <p className="label-center">Status: {isActive.toString()}</p>
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

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);