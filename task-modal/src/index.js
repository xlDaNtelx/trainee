import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import MainComponent from './components/MainComponent';
import { rootReducer } from './store/reducers';
import './index.css';

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
    this.setState({
      isActive: this.state.isActive ? false : true
    });
  }
  modalShow() {
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p className="label-styler">
        &nbsp;Open using "State"
          <p>
          &nbsp;&nbsp;&nbsp; <button className="btn-styler-react" type="button" onClick={this.modalShow}>Show modal</button>
          </p>
        </p>
        <Modal>
          <Child disabled={this.state.isActive}/>
        </Modal>
      </div>
    );
  }
}

function Child(props) {
  return (
    <div className={`modal ${props.disabled ? 'disabled' : ''}`}>
      <div className="modal-container">
        <div className="modal-header">Form with State</div>
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

ReactDOM.render(
  <React.Fragment>
    <Parent/>
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  </React.Fragment>,
  appRoot
);
