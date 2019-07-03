import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Results from '../Results/Results';

afterEach(cleanup);

test(' renders results', async () => {
  const props = [
    {
      title: 'cookie book',
      authors: ['The Cookie Baker'],
      publisher: 'Penguin Books',
      description: 'a book about cookies'
    },
    {
      title: 'the cooking book',
      authors: ['paula dean'],
      publisher: 'the food network',
      description: 'paula dean recipes'
    }
  ];

  props.map(book => (book.title, book.authors[0], book.publisher, book.description));
  const { getAllByTestId } = render(<Results results={props} />);
  const bookResults = await waitForElement(() => getAllByTestId('list'));
  expect(bookResults).toBeTruthy();
});
