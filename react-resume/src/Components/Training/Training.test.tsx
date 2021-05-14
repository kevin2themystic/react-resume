import React from 'react';
import { render } from '@testing-library/react';
import Training from './training';

test('renders learn react link', () => {
  const { getByText } = render(
    <Training  key={1} name={"test name"}
      description={"test description"}
      startDate={"test startDate"}
      endDate={"test endDate"}
      webLink={"test webLink"} />
  );
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
