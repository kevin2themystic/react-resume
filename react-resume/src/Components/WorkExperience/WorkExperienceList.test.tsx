import React from 'react';
import { render } from '@testing-library/react';
import WorkExperienceList from './WorkExperienceList';

test('renders learn react link', () => {
  const { getByText } = render(<WorkExperienceList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
