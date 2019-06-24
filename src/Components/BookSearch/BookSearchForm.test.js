import React from 'react';
import { render, cleanup, fireEvent, getByLabelText } from '@testing-library/react';
import BookSearch from './BookSearch';

test('Book Search Form', () => {
  const onSubmit = jest.fn();
  afterEach(cleanup);
  const { getByTestId, debug } = render(<BookSearch handleSubmit={onSubmit} />);
  fireEvent.submit(getByTestId('submit-btn'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  debug();
});
