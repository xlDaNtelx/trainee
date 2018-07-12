
import { requestAction, successAction, errorAction } from './books';
import { getBooks } from '../../api/books';

export const getAllBooks = () => {
  return (dispatch) => {
    dispatch(requestAction());
    setTimeout(() => getBooks
    .then(({data}) => {
      dispatch(successAction(data));
    })
    .catch((error) => {
      dispatch(errorAction(error));
    }), 3000);
  }
}