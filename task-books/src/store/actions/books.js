import * as actionsTypes from './actionsTypes';

export const requestAction = () => {
  return {
    type: actionsTypes.BOOKS_REQUEST,
    payload: [],
    loading: true 
  };
};

export const errorAction = (error) => {
  return {
    type: actionsTypes.BOOKS_ERROR,
    payload: error.toString(),
    error: true
  };
};

export const successAction = (data) => {
  const winNum = Math.round(Math.random() * 7);
  data[winNum].lucky = true;
  return {
    type: actionsTypes.BOOKS_SUCCESS,
    payload: data
  };
};