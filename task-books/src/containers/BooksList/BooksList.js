import React from 'react'
import Loader from '../../components/Loader';
import { getAllBooks } from '../../store/actions/books.thunk';
import {connect} from 'react-redux';


class Bookslist extends React.Component {
  
  getBooks = () => setTimeout(() => this.props.dispatch(getAllBooks()), 2000);

  componentDidMount() {
    this.getBooks();
  }

  render() {  

  const { books, loading } = this.props.data;

  const bookList = books.map( (book) =>
    <div className="col-md-3" key={book.ID}>
      <div className="book-container">
        <div className="book-id-holder">
          <div className="book-id">Id: {book.ID}</div>
        </div>
        <div className="book-title-holder">
          <div className="book-title">Name: {book.Title}</div>
        </div>
        <div className="book-count-holder">
          <div className="book-count">Pages: {book.PageCount}</div>
        </div>
      </div>
    </div>
  )  
    
    return (
      <div className="container">
        <div className="row">
          <Loader loading={loading}/>
          {bookList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Bookslist);