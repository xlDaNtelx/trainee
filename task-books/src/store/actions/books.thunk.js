
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksError } from './books';
import { getAllBooks } from '../../api/books';

/**
 * Return all books from request, page and perPage.
 *
 * @exports
 * @param {number} page - Number of current page.
 * @param {number} perPage - Number of pages that must be show in one page.
 * @returns {Object} - result of success or error data request
 */
const getBooks = (page, perPage) => (dispatch) => {
  dispatch(fetchBooksRequest(page, perPage));
  return getAllBooks()
    .then(({ data }) => {
      dispatch(fetchBooksSuccess(data, page, perPage));
    })
    .then((error) => {
      dispatch(fetchBooksError(error));
    });
};

export default getBooks;
