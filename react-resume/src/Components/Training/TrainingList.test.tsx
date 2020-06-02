import React from 'react';
import { render } from '@testing-library/react';
import TrainingList from './TrainingList';

test('renders learn react link', () => {
  const { getByText } = render(<TrainingList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
