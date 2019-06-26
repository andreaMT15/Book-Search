import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';
import BookSearch from '../../Components/BookSearch/BookSearch';

afterEach(cleanup);

test('<HomePage/>', () => {
  const onSubmit = jest.fn();
  const url = '/books';
  axiosMock.get(url).then(response => response.data);
  const { getByTestId } = render(<BookSearch onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId('submit-btn'));
  expect(getByTestId('book-search')).toBeTruthy();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
