import React, { Component } from 'react';
import './BookSearch.css';

class BookSearch extends Component {
  render() {
    return (
      <div className="book-search">
        <div className="form-wrapper">
          <form className="sb-search-form" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              className="search-input"
              placeholder="Search a book title"
              onChange={this.props.handleChange}
            />

            <button id="submit-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookSearch;
