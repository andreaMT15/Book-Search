import React, { Component } from 'react';
import BookSearch from '../../Components/BookSearch/BookSearch';
import axios from 'axios';
import './HomePage.css';
import Results from '../../Components/Results/Results';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      searchTerm: '',
      status: 'searching',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
        this.setState({ status: 'done', results: books });
      })
      .catch(error => {
        console.log('Error Response', error);
        this.setState({ satus: 'error' });
      });
  }

  render() {
    return (
      <div>
        <BookSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default HomePage;
