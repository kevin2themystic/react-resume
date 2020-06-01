import React from 'react';
import { render } from '@testing-library/react';
import Education from './Education';

test('renders learn react link', () => {
  const { getByText } = render(<Education />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
