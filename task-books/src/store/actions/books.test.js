import { BOOKS_ERROR, BOOKS_REQUEST, BOOKS_SUCCESS } from './actionsTypes';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksError } from './books';

test('Actions test', () => {
  expect(fetchBooksRequest(1, 2)).toMatchObject({
    type: BOOKS_REQUEST,
    payload: {
      books: [],
      loading: true,
      page: 1,
      perPage: 2
    }
  });

  expect(fetchBooksError(2)).toMatchObject({
    type: BOOKS_ERROR,
    payload: '2',
    error: true
  });

  expect(fetchBooksSuccess(1, 2, 3)).toMatchObject({
    type: BOOKS_SUCCESS,
    payload: {
      books: 1,
      page: 2,
      perPage: 3
    }
  });
});
