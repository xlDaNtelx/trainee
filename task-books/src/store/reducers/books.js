import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_ERROR } from '../actions/actionsTypes';

const initialState = {
  books: [],
  loading: true
};

export const bookReducer = (state = initialState, action) => {
  switch(action.type) {
      case BOOKS_REQUEST :
        return {...state, loading: true};
      case BOOKS_SUCCESS :
        return {...state, ...action.payload};
      case BOOKS_ERROR :
        return {...state, ...action.payload};
      default:
        return state;
    }
  }