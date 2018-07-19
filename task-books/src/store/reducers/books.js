import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_ERROR } from '../actions/actionsTypes';
/**
 * Initial state for books reducer.
 *
 * @default
 */
export const initialState = {
  books: [],
  page: 1,
  perPage: 8,
  count: 0,
  loading: false,
  error: '',
};

/**
 * Return new state using income action.
 *
 * @param {Object} state - current state.
 * @param {Object} action - current action that income to reducer.
 * @returns {Object} - new state.
 */
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        loading: action.payload.loading
      };
    case BOOKS_SUCCESS:
      const { page, books } = action.payload;
      const { perPage } = state;
      return {
        ...state,
        ...action.payload,
        loading: false,
        books: books.slice((page - 1) * perPage, page * perPage),
        count: books.length,
      };
    case BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
