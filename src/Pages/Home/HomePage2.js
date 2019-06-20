import React, { Component } from 'react';
import axios from 'axios';
import Results from '../../Components/Results/Results';
// import querystring from 'querystring';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: []
      // author: '',
      // bookTitle: '',
      // coverImage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;

    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=' + apiKey).then(res => {
      this.setState({ results: res.data });
      console.log(this.state.results);
      // const results = res.data.items;
      // const books = results.map(book => book.volumeInfo);
      // console.log(books);

      // this.setState({
      //   bookTitle: books[0].title,
      //   author: books[0].authors[0],
      //   coverImage: books[0].imageLinks.thumbnail,
      //   publisher: books[0].publisher
      // });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="book-search">
        <form className="form-inline sb-search-form" onSubmit={this.handleSubmit}>
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
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default BookSearch;
