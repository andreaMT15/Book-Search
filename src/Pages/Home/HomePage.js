import React, { Component } from 'react';
import BookSearch from '../../Components/BookSearch/BookSearch';
import axios from 'axios';
import Results from '../../Components/Results/Results';
import './HomePage.css';

const initialState = {
  searchTerm: '',
  searchError: '',
  status: 'searching',
  results: []
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  getResults() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    const { searchTerm } = this.state;

    axios
      .get(url + searchTerm + '&key=' + apiKey + '&maxResults=10')
      .then(res => {
        const response = res.data.items;
        const books = response.map(book => book.volumeInfo);
        this.setState({ status: 'done', results: books });
      })
      .catch(() => {
        this.setState({ status: 'error' });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.setState(initialState);
      this.getResults();
    }
  }

  validate() {
    const { searchTerm } = this.state;
    let searchError = '';

    if (!searchTerm) {
      searchError = 'Please search for a book title ';
    }
    if (searchError) {
      this.setState({ searchError, status: 'search error' });
      return false;
    }
    return true;
  }

  render() {
    const { status, searchTerm, searchError, results } = this.state;
    if (status === 'error') {
      return <h1>Oops! Something went wrong! </h1>;
    } else {
      return (
        <div>
          <BookSearch
            value={searchTerm}
            searchError={searchError}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Results results={results} />
        </div>
      );
    }
  }
}

export default HomePage;
