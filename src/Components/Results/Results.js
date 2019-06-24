import React from 'react';
import Button from 'react-bootstrap/Button';
import defaultImage from '../../assets/Book Cover.png';
import './Results.css';

const Results = props => {
  console.log(props.results);
  const bookInfo = props.results.map(bookList => ({
    title: bookList.title !== undefined ? bookList.title : 'N/A',
    author: bookList.authors[0] !== undefined ? bookList.authors[0] : 'N/A',
    publisher: bookList.publisher !== undefined ? bookList.publisher : 'N/A',
    description: bookList.description !== undefined ? bookList.description : 'N/A',
    image: bookList.imageLinks !== undefined ? bookList.imageLinks.thumbnail : defaultImage,
    infoLink: bookList.infoLink
  }));

  const bookDisplay = bookInfo.map((book, index) => (
    <div id="results" className="list-wrapper" key={index}>
      <div className="book-image">
        <img src={book.image} alt="book-cover" />
      </div>
      <div className="book-info">
        <ul>
          <li>
            <div className="heading"> Book Title:</div>
            <div>{book.title}</div>
          </li>
          <li>
            <div className="heading">Author:</div>
            <div>{book.author}</div>
          </li>
          <li>
            <div className="heading">Publishing Company:</div>
            <div>{book.publisher}</div>
          </li>
          <li>
            <div className="heading">Description:</div>
            <div>{book.description}</div>
          </li>
        </ul>
        <a href={book.infoLink}>
          <Button id="more-button" variant="primary">
            Learn More
          </Button>
        </a>
      </div>
    </div>
  ));
  return bookDisplay;
};

export default Results;
