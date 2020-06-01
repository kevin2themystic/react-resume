import React from 'react';
import { render } from '@testing-library/react';
import Link from './Link';

test('renders learn react link', () => {
  const { getByText } = render(<Link />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
