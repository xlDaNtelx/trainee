
import { requestAction, errorAction } from './books';
import { BOOKS_SUCCESS } from './actionsTypes';
import { getBooks } from '../../api/books';

export const getAllBooks = () => {
  return (dispatch) => {
    dispatch(requestAction);
    getBooks
      .then(({data}) => {
        dispatch({
          type: BOOKS_SUCCESS,
          payload: {books: data, loading: false}
        })
      })
      .catch(() => {
        dispatch(errorAction);
      })
  }
}