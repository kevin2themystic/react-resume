import React from 'react';
import { render } from '@testing-library/react';
import LinkList from './LinkList';

test('renders learn react link', () => {
  const { getByText } = render(<LinkList />);
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
