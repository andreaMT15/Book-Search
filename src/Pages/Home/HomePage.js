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
    this.setState({ [event.target.name]: event.target.value });
  }

  getResults() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    const searchTerm = this.state.searchTerm;

    axios
      .get(url + searchTerm + '&key=' + apiKey + '&maxResults=10')
      .then(res => {
        const response = res.data.items;
        const books = response.map(book => book.volumeInfo);
        this.setState({ status: 'done', results: books });
      })
      .catch(error => {
        console.log('Error Response', error);
        this.setState({ satus: 'error' });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getResults();

    const isValid = this.validate();

    if (isValid) {
      this.setState(initialState);
    }
  }

  validate() {
    let searchError = '';
    if (!this.state.searchTerm) {
      searchError = 'Please search for a book title ';
    }
    if (searchError) {
      this.setState({ searchError });
      return false;
    }
    return true;
  }

  render() {
    if (this.state.results === 'error') {
      return <h1>Oops! Something went wrong! </h1>;
    } else {
      return (
        <div>
          <BookSearch
            searchError={this.state.searchError}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Results results={this.state.results} />
        </div>
      );
    }
  }
}

export default HomePage;
