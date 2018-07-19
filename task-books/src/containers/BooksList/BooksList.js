import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Pagination from '../../components/Pagination';
import EmptyData from '../../components/EmptyData';
import { fetchBooksRequest } from '../../store/actions/books';
import './BookList.css';


class Bookslist extends React.Component {
  componentDidMount() {
    const { perPage, dispatch } = this.props;
    dispatch(fetchBooksRequest(1, perPage));
    this.loadPage = this.loadPage.bind(this);
  }

  /**
  * Generate all books items for show.
  *
  * @param {Array} books - array of books
  * @public
  */
  setPage(books) {
    return books.map(book => (
      <div className="col-md-3" key={book.ID}>
        <div className="book-container">
          <div className="book-id-holder">
            <div className="book-id">
              Id:
              {book.ID}
            </div>
          </div>
          <div className="book-title-holder">
            <div className="book-title">
              Name:
              {book.Title}
              {' '}
              <span className="lucky">
                {`${book.lucky ? '*' : ''}`}
              </span>
            </div>
          </div>
          <div className="book-count-holder">
            <div className="book-count">
              Pages:
              {book.PageCount}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  /**
  * Load new books items for page using pagination.
  *
  * @param {number} page - Number of current page.
  * @param {number} perPage - Number of pages that must be show in one page.
  * @public
  */
  loadPage(page, perPage) {
    const { dispatch } = this.props;
    dispatch(fetchBooksRequest(page, perPage));
  }

  render() {
    const {
      books, loading, error, page, perPage, count,
    } = this.props;
    const bookList = this.setPage(books);
    return (
      <React.Fragment>
        <Loader opacity={books.length ? 0.5 : 1} loading={loading} />
        {books.length === 0 && !error && !loading && <EmptyData />}
        <Error error={error} />
        {!!(!error && books.length) && (
          <div className="container">
            <div className="row">
              {!error && bookList}
            </div>
            <Pagination
              perPage={perPage}
              page={page}
              count={count}
              onChange={this.loadPage}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  page: state.page,
  perPage: state.perPage,
  count: state.count,
  error: state.error,
});

Bookslist.propTypes = {
  /** Array of books items */
  books: PropTypes.array,
  /** State of loading page */
  loading: PropTypes.bool.isRequired,
  /** Text of error if request was fail */
  error: PropTypes.string.isRequired,
  /** Count of books elements */
  count: PropTypes.number.isRequired,
  /** Count of elements to show in one page */
  perPage: PropTypes.number.isRequired,
  /** Dispatch function */
  dispatch: PropTypes.func.isRequired,
  /** Current page to show */
  page: PropTypes.number,
};

Bookslist.defaultProps = {
  page: 1,
  books: []
};

export default connect(mapStateToProps)(Bookslist);
