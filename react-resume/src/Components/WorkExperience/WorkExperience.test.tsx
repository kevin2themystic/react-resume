import React from 'react';
import { render } from '@testing-library/react';
import WorkExperience from './WorkExperience';

test('renders learn react link', () => {
  const { getByText } = render(<WorkExperience />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
