import React from 'react'
import { getAllBooks } from '../store/actions';
import {connect} from 'react-redux';
import './loader.css';

class Bookslist extends React.Component {
  
  getBooks = () => setTimeout(() => this.props.dispatch(getAllBooks()), 2000);

  componentDidMount() {
    this.getBooks();
  }

  render() {  

    const { data, loading } = this.props.books;

  const bookList = data.map( (book) =>
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
          <div id="loader" className={loading ? 'show' : 'hide'}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="lading"></div>
          </div>
          {bookList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

export default connect(mapStateToProps)(Bookslist);;
