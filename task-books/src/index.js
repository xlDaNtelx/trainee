import React from 'react'
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import BooksList from './components/BooksList';
import { bookReducer } from './store/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//combineReducers bindActionCreators

const store = createStore(
  bookReducer, 
  devToolsEnhancer(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>,
  document.getElementById('root')
)