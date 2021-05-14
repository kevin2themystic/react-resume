import React from 'react';
import { render } from '@testing-library/react';
import Education from './education';

test('renders learn react link', () => {
  const { getByText } = render(
    <Education key={1} institution={"test institution"}
      programName={"test programName"}
      startDate={"test startDate"}
      endDate={"test endDate"}
      location={"test location"} />
  );
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
