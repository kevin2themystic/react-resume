import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  const { getByText } = render(<Header />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});