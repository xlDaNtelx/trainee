import { fetchBooksRequest, fetchBooksSuccess, fetchBooksError } from '../actions/books';
import booksReducer, { initialState } from './books';

test('Reducer test', () => {
  expect(() => {
    booksReducer();
  }).toThrow();

  expect(booksReducer(initialState, fetchBooksRequest())).toMatchObject({
    ...initialState,
    loading: true
  });

  expect(booksReducer(initialState, fetchBooksSuccess([], 1, 8))).toMatchObject({
    ...initialState,
    loading: false,
    books: [].slice(0, 8),
    count: 0,
  });

  expect(booksReducer(initialState, fetchBooksError(new Error('Sorry')))).toMatchObject({
    ...initialState,
    loading: false,
    error: 'Error: Sorry'
  });

  expect(booksReducer(initialState, { type: 'BOOKS_OTHER' })).toMatchObject({
    ...initialState
  });
});
