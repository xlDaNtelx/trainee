import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_ERROR } from '../actions/actionsTypes';

const initialState = {
  books: [],
  loading: false,
  error: ''
};

export const bookReducer = (state = initialState, action) => {
  switch(action.type) {
      case BOOKS_REQUEST :
        return {...state, loading: true};
      case BOOKS_SUCCESS :
        return {...state, books: action.payload, loading: false};
      case BOOKS_ERROR :
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  }