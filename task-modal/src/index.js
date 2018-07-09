import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import MainComponent from './components/MainComponent';
import { rootReducer } from './store/reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(rootReducer, devToolsEnhancer());

const appRoot = document.getElementById('root');
const modalRootState = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRootState.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRootState.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActive: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // document.querySelector('body').classList.toggle('modal-open');
    this.setState({
      isActive: this.state.isActive ? false : true
    });
  }
  modalShow() {
  }

  render() {
    return (
      <div>
        <p className="label-styler">
        &nbsp;Open using "State"
          <p>
          &nbsp;&nbsp;&nbsp; <button className="btn-styler-react" data-target="#my-modal" data-toggle="modal" type="button" onClick={this.handleClick}>Show modal</button>
          </p>
        </p>
        <Modal>
          <Child disabled={this.state.isActive} onClick={this.handleClick}/>
        </Modal>
      </div>
    );
  }
}

function Child(props) {
  return (
    <div id="my-modal" className={`modal fade ${props.disabled ? 'disabled' : ''}`} tabindex="-1" role="dialog">
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

ReactDOM.render(
  <React.Fragment>
    <Parent/>
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  </React.Fragment>,
  appRoot
);
