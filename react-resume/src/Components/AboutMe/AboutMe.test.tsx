import React from 'react';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders learn react link', () => {
  const { getByText } = render(<AboutMe />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
