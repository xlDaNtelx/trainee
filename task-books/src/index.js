import React from 'react'
import ReactDOM from 'react-dom';
import BooksList from './containers//BooksList';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { bookReducer } from './store/reducers/books';
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