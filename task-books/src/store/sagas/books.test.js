import { call, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { deepEqual } from 'assert';
import { BOOKS_REQUEST } from '../actions/actionsTypes';
import { fetchBooksRequest, fetchBooksSuccess } from '../actions/books';
import watcherBooks, { getBooks } from './books';
import { getAllBooks } from '../../api/books';

test('Saga test', () => {
  const iterator = cloneableGenerator(getBooks)(fetchBooksRequest(1, 8));
  const watcher = watcherBooks();
  deepEqual(
    iterator.next(fetchBooksRequest(1, 8)).value,
    call(getAllBooks),
    'it should return state after request'
  );

  const cloneSuccess = iterator.clone();
  deepEqual(
    cloneSuccess.next({ data: [] }).value,
    put(fetchBooksSuccess([], 1, 8)),
    'it should be test success result'
  );

  const cloneError = iterator.clone();
  expect(cloneError.next().value).toHaveProperty('PUT.action.error', true);

  deepEqual(
    watcher.next().value,
    takeLatest(BOOKS_REQUEST, getBooks),
    'it should be test error result'
  );
});
