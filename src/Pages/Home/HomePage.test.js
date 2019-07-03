import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';
import BookSearch from '../../Components/BookSearch/BookSearch';
import HomePage from '../../Pages/Home/HomePage';

afterEach(cleanup);

test('<BookSearch/>', () => {
  const onSubmit = jest.fn();
  const url = '/books';
  axiosMock.get(url).then(response => response.data);
  const { getByTestId } = render(<BookSearch onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId('submit-btn'));
  expect(getByTestId('book-search')).toBeTruthy();
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test('renders the error message if no search term is entered', () => {
  const { getByTestId } = render(<BookSearch />);
  const input = getByTestId('search-input');
  fireEvent.change(input, { target: { value: null } });
  fireEvent.submit(getByTestId('submit-btn'));
  const errorMessage = getByTestId('input-error');
  expect(errorMessage).not.toBeNull();
});

test('renders the error message on HomePage', async () => {
  const { getByText, getByTestId } = render(<HomePage />);
  const input = getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'khdlfksdhl' } });
  fireEvent.submit(getByTestId('submit-btn'));
  const homePageError = await waitForElement(() => getByText(/Oops! Something went wrong!/));
  expect(homePageError).not.toBeNull();
});
