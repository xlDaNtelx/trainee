import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import ReduxModal from './components/ReduxModal';
import { rootReducer } from './store/reducers';
import StateModal from './components/StateModal';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <StateModal/>
      <br/>
      <ReduxModal/>    
    </div>
  </Provider>,
  document.getElementById('root')
);
