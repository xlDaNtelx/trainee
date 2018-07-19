import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';
import watcherBooks from './store/sagas/books';
import bookReducer from './store/reducers/books';
import BooksList from './containers/BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(bookReducer,
  compose(applyMiddleware(sagaMiddleware),
    devToolsEnhancer()));

sagaMiddleware.run(watcherBooks);

ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>,
  document.getElementById('root')
);
