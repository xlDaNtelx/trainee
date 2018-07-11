import * as actionsTypes from './actionsTypes';

console.log(actionsTypes.BOOKS_REQUEST);

export const requestAction = {
  type: actionsTypes.BOOKS_REQUEST, payload: {books: []}
};

export const errorAction = {
  type: actionsTypes.BOOKS_ERROR, payload: {books: [], loading: false, error: true}
};
