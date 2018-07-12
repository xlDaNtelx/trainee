import React from 'react'
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
import { getAllBooks } from '../../store/actions/books.thunk';
import { connect } from 'react-redux';
import './BookList.css';


class Bookslist extends React.Component {
  constructor(props) {
    super(props);
    this.curPage = 0;
    this.books = [];
  }

  componentDidMount() {
    this.props.dispatch(getAllBooks());
  }

  getId(pageNum) {
    return 8 * pageNum;
  }

  setPage() {
    return this.books.filter((elem) => elem.ID > this.getId(this.curPage) && elem.ID <= this.getId(this.curPage + 1)).map((book) =>
      <div className="col-md-3" key={book.ID}>
        <div className="book-container">
          <div className="book-id-holder">
            <div className="book-id">Id: {book.ID}</div>
          </div>
          <div className="book-title-holder">
            <div className="book-title">Name: {book.Title} <span className="lucky">{`${book.lucky ? '*' : ''}`}</span></div>
          </div>
          <div className="book-count-holder">
            <div className="book-count">Pages: {book.PageCount}</div>
          </div>
        </div>
      </div>
    )
  }

  getPage = (event) => {
    this.curPage = parseInt(event.target.innerHTML) - 1;
    this.forceUpdate();
  }

  nextPage = () => {
    this.curPage <= 25 ? this.curPage++ : this.curPage;
    this.forceUpdate();
  }

  prevPage = () => {
    this.curPage >= 0 ? this.curPage-- : this.curPage;
    this.forceUpdate();
  }

  setPagination() {
    const pagArray = [];
    for(let i = 0; i < 25; i++) {
      pagArray.push(<span key={i} className={`pagination-item ${this.curPage === i ? 'active-item' : ''}`} onClick={this.getPage} >{i+1}</span>);
    }
      return <div className="pagination">{pagArray}</div>
  }

  render() {
    this.books = this.props.books;
    const loading = this.props.loading;
    const error = this.props.error;

    const bookList = this.setPage();
    return (
      <div className="container">
        <Error error={error} />
        <div className="row">
          <Loader loading={loading} />
          {bookList}
        </div>
        <div className={`row ${loading ? 'hide' : 'controls'}`}>
          <button type="button" className="prev" disabled={this.curPage === 0} onClick={this.prevPage}>Prev</button>
          {this.setPagination()}
          <button type="button" className="next" disabled={!(this.curPage < 24)} onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
}

Bookslist.propTypes = {
  books: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default connect(mapStateToProps)(Bookslist);