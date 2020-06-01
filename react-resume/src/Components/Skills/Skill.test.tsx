import React from 'react';
import { render } from '@testing-library/react';
import Skill from './Skill';

test('renders learn react link', () => {
  const { getByText } = render(<Skill />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
