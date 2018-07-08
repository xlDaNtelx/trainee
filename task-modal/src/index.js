import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import MainComponent from './components/MainComponent';
import { rootReducer } from './store/reducers'; 

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <MainComponent/>
  </Provider>, 
  document.getElementById('root')
);

