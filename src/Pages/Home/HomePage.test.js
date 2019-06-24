import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';

afterEach(cleanup);

test('<HomePage/>', () => {
  // const onSubmit = jest.fn();
  const { debug, getByTestId } = render(<HomePage />);
  expect(getByTestId('book-search')).toBeTruthy();
  // fireEvent.change(getByTestId('search-input'), {
  //   target: { value: 'Jemima J' }
  // });
  // expect(onSubmit).toHaveBeenCalledWith({
  //   searchTerm: 'Jemima J'
  // });
  debug();
});
