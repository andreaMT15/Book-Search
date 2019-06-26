import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import defaultImage from '../../assets/Book Cover.png';

import './Results.css';

const Results = props => {
  const bookInfo = props.results.map(bookList => ({
    title: bookList.title !== undefined ? bookList.title : 'N/A',
    author: bookList.authors !== undefined ? bookList.authors[0] : 'N/A',
    publisher: bookList.publisher !== undefined ? bookList.publisher : 'N/A',
    description: bookList.description !== undefined ? bookList.description : 'N/A',
    image: bookList.imageLinks !== undefined ? bookList.imageLinks.thumbnail : defaultImage,
    infoLink: bookList.infoLink
  }));

  configureAnchors({ offset: -3500 });

  const bookDisplay = bookInfo.map((book, index) => (
    <ScrollableAnchor id={'result-list'} key={index}>
      <Row>
        <Col>
          <div data-testid="list" className="list-wrapper">
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
        </Col>
      </Row>
    </ScrollableAnchor>
  ));
  return bookDisplay;
};

export default Results;
