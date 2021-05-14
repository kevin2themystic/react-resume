import React from 'react';
import { render } from '@testing-library/react';
import TrainingList from './trainingList';

test('renders learn react link', () => {
  const { getByText } = render(<TrainingList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
