import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { goToAnchor } from 'react-scrollable-anchor';
import './BookSearch.css';

class BookSearch extends Component {
  render() {
    const { handleSubmit, handleChange, searchError, value } = this.props;

    return (
      <div data-testid="book-search" className="book-search">
        <div className="form-wrapper">
          <form className="sb-search-form" onSubmit={handleSubmit}>
            <label htmlFor="text">
              <input
                data-testid="search-input"
                type="text"
                name="searchTerm"
                className="search-input"
                placeholder="Search a book title"
                value={value}
                onChange={handleChange}
              />
            </label>

            <Button onClick={() => goToAnchor('result-list')} data-testid="submit-btn" id="submit-btn" type="submit">
              Search
            </Button>
            <div data-testid="input-error" className="error">
              {searchError}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookSearch;
