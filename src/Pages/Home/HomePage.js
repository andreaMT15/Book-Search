import React, { Component } from 'react';
import axios from 'axios';
import BookSearch from '../../Components/BookSearch/BookSearch';
import Results from '../../Components/Results/Results';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      searchTerm: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const apiKey = this.state.apiKey;
    const searchTerm = this.state.searchTerm;

    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=' + apiKey + '&maxResults=10')
      .then(res => {
        const response = res.data.items;
        const books = response.map(book => book.volumeInfo);
        this.setState({ results: books });
      })
      .catch(error => {
        console.log('Error Response', error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <BookSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} title={this.state.bookTitle} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default HomePage;
