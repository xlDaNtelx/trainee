import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  /**
  * Generate pagination.
  *
  * @public
  */
  setPagination() {
    const { count, perPage, page } = this.props;
    const pageCount = Math.ceil(count / perPage);
    return (
      <div className="row controls">
        <button type="button" className="prev small" disabled={page === 1} onClick={this.prevPage}>
Prev
        </button>
        <button type="button" className="next" disabled={!(page < pageCount)} onClick={this.nextPage}>
Next
        </button>
      </div>
    );
  }

  /**
  * Change current page to the next one.
  *
  * @public
  */
  nextPage() {
    const { onChange, page, perPage } = this.props;
    onChange(page + 1, perPage);
  }

  /**
  * Change current page to the previously one.
  *
  * @public
  */
  prevPage() {
    const { onChange, page, perPage } = this.props;
    onChange(page - 1, perPage);
  }

  render() {
    return (
      <div>
        {this.setPagination()}
      </div>
    );
  }
}

Pagination.propTypes = {
  /** Current page */
  page: PropTypes.number.isRequired,
  /** Count of page to display per page */
  perPage: PropTypes.number.isRequired,
  /** Function that will be call after using pagination */
  onChange: PropTypes.func.isRequired,
  /** Count of all items */
  count: PropTypes.number.isRequired,
};

export default Pagination;
