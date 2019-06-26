import React from 'react';
import { render } from '@testing-library/react';
import BookSearch from './BookSearch';

test('<BookSearch/>', () => {
  const { container } = render(<BookSearch />);
  expect(container).toMatchSnapshot();
});
