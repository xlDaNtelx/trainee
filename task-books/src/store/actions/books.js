import * as actionsTypes from './actionsTypes';

/**
 * Starts getting books request.
 *
 * @param {number} page - Number of current page.
 * @param {number} perPage - Number of pages that must be show in one page.
 * @returns FluxStandardAction
 */
export const fetchBooksRequest = (page, perPage) => ({
  type: actionsTypes.BOOKS_REQUEST,
  payload: {
    books: [],
    loading: true,
    page,
    perPage
  }
});

/**
 * Return Error in String format.
 *
 * @param {Object|string} error - Number of current page.
 * @returns FluxStandardAction
 */
export const fetchBooksError = (error = 'Very unexpected error') => ({
  type: actionsTypes.BOOKS_ERROR,
  payload: error.toString(),
  error: true,
});

/**
 * Return all books from request, page and perPage.
 *
 * @param {array} books - Array of books items.
 * @param {number} page - Number of current page.
 * @param {number} perPage - Number of pages that must be show in one page.
 * @returns FluxStandardAction
 */
export const fetchBooksSuccess = (books, page, perPage) => ({
  type: actionsTypes.BOOKS_SUCCESS,
  payload: { books, page, perPage },
});
