import React from 'react';
import Button from 'react-bootstrap/Button';
import defaultImage from '../../assets/Book Cover.png';
import './Results.css';

const Results = props => {
  const bookInfo = props.results.map(bookList => ({
    title: bookList.title !== undefined ? bookList.title : 'N/A',
    author: bookList.authors[0] !== undefined ? bookList.authors[0] : 'N/A',
    publisher: bookList.publisher !== undefined ? bookList.publisher : 'N/A',
    description: bookList.description !== undefined ? bookList.description : 'N/A',
    image: bookList.imageLinks !== undefined ? bookList.imageLinks.thumbnail : defaultImage,
    infoLink: bookList.infoLink
  }));

  const bookDisplay = bookInfo.map((book, index) => (
    <div className="list-wrapper" key={index}>
      <div className="book-image">
        <img src={book.image} alt="book-cover" />
      </div>
      <div className="book-info">
        <ul>
          <li>Book Title: {book.title}</li>
          <li>Author: {book.author}</li>
          <li>Publishing Company: {book.publisher}</li>
          <li>Description: {book.description}</li>
        </ul>
        <a href={book.infoLink}>
          <Button variant="primary">Learn More</Button>
        </a>
      </div>
    </div>
  ));
  return bookDisplay;
};

export default Results;
