import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getBooks from './books.thunk';
import { BOOKS_SUCCESS, BOOKS_ERROR } from './actionsTypes';
import { fetchBooksRequest } from './books';
import { getAction } from '../../../__test__/utils/getAction';

export const mockStore = configureMockStore([thunk]);

describe('getBooks', () => {
  it('starts request and return response results', async () => {
    const store = mockStore();
    await store.dispatch(getBooks(1, 8));
    const actionRequest = store.getActions()[0];
    expect(actionRequest).toEqual(fetchBooksRequest(1, 8));
    expect(await getAction(store, BOOKS_SUCCESS)).toHaveProperty('type', BOOKS_SUCCESS);
    expect(await getAction(store, BOOKS_ERROR)).toHaveProperty('type', BOOKS_ERROR);
  });
});
