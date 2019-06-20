import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            className="sb-search-input"
            placeholder="Search Title"
            onChange={this.handleChange}
          />

          <button type="submit" className="sb-search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
