import React from 'react';
import { render } from '@testing-library/react';
import Objective from './Objective';

test('renders learn react link', () => {
  const { getByText } = render(<Objective />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
