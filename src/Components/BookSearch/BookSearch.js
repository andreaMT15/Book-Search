import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';

class BookSearch extends Component {
  render() {
    const { handleSubmit } = this.props;
    const { handleChange } = this.props;
    return (
      <div data-testid="book-search" className="search-wrapper">
        <div className="form-wrapper">
          <form className="sb-search-form" onSubmit={handleSubmit}>
            <label htmlFor="text">
              <input
                data-testid="search-input"
                type="text"
                name="searchTerm"
                className="search-input"
                placeholder="Search a book title"
                value={this.props.searchTerm}
                onChange={handleChange}
              />
            </label>

            <Button data-testid="submit-btn" id="submit-btn" type="submit">
              Search
            </Button>
            <div className="error">{this.props.searchError}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookSearch;
