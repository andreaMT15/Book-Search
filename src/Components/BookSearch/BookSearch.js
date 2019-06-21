import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';

class BookSearch extends Component {
  render() {
    return (
      <div id="book-search" className="book-search">
        <div className="form-wrapper">
          <form className="sb-search-form" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              className="search-input"
              placeholder="Search a book title"
              onChange={this.props.handleChange}
            />

            <Button id="submit-btn" type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookSearch;
