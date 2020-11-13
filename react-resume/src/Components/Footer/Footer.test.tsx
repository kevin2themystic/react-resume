import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders learn react link', () => {
  const { getByText } = render(<Footer />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
