import React from 'react';
import { render } from '@testing-library/react';
import AboutThiSite from './AboutThiSite';

test('renders learn react link', () => {
  const { getByText } = render(<AboutThiSite />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
