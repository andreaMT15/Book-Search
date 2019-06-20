import React from 'react';
import Button from 'react-bootstrap/Button';
import './Results.css';

const Results = props => {
  console.log(props.results);

  const bookList = props.results.map((bookList, index) => (
    <div className="list-wrapper" key={index}>
      <div className="book-image">
        <img src={bookList.imageLinks.smallThumbnail} alt="book-cover" />
      </div>
      <div className="book-info">
        <ul>
          <li>Book Title: {bookList.title}</li>
          <li>Author: {bookList.authors[0]}</li>
          <li>Publishing Company: {bookList.publisher}</li>
          <li>Description: {bookList.description}</li>
        </ul>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  ));

  return bookList;
};

export default Results;
