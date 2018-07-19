import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchBooksSuccess, fetchBooksError } from '../actions/books';
import { BOOKS_REQUEST } from '../actions/actionsTypes';
import { getAllBooks } from '../../api/books';

/**
 * Return new state using income action.
 *
 * @generator
 * @param {Object} action - current action that income to reducer.
 * @yields {Object} The next action in the books actions.
 */
export function* getBooks(action) {
  try {
    const result = yield call(getAllBooks);
    const { data } = result;
    const { page, perPage } = action.payload;
    yield put(fetchBooksSuccess(data, page, perPage));
  } catch (error) {
    yield put(fetchBooksError(error));
  }
}

/**
 * Return new state using income action.
 *
 * @generator
 * @yields {Object} Start request to get books.
 */
export default function* watcherBooks() {
  yield takeLatest(BOOKS_REQUEST, getBooks);
}
