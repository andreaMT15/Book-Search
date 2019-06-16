import React, { Component } from 'react';
import axios from 'axios';
// import querystring from 'querystring';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {
    const searchTerm = 'jemima';
    const author = 'green';

    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '+inauthor:' + author + '&key=' + apiKey)
      .then(res => {
        console.log(res.data.items);
      });
  }

  render() {
    return <div>These are book results</div>;
  }
}

export default BookSearch;
