import React from 'react';
import { render } from '@testing-library/react';
import EducationList from './TrainingList';

test('renders learn react link', () => {
  const { getByText } = render(<EducationList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
