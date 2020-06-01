import React from 'react';
import { render } from '@testing-library/react';
import SkillList from './SkillList';

test('renders learn react link', () => {
  const { getByText } = render(<SkillList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
