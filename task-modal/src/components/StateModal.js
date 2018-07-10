import React from 'react'
import Child from './Child';
import Modal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';

const modalRootState = 'modal-root';

class StateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: this.state.isActive ? false : true
    });
  }

  render() {
    return (
      <div>
        <span className="label-styler">&nbsp;Open using "State"</span><br/>
          &nbsp;&nbsp;&nbsp; <button className="btn-styler-react" data-target="#state-modal" data-toggle="modal" type="button" onClick={this.handleClick}>Show modal</button>
        <Modal modalRoot={modalRootState}>
          <Child isActive={this.state.isActive} onClick={this.handleClick} id="state-modal" />
        </Modal>
      </div>
    );
  }
}


export default StateModal;