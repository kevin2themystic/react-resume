import React from 'react';
import { render } from '@testing-library/react';
import WorkExperience from './workExperience';

test('renders learn react link', () => {
  const { getByText } = render(
    <WorkExperience organization={"test organization"}
      title={"test title"}
      startDate={"test startDate"}
      endDate={"test endDate"}
      location={"test location"}
      locationType={"remotely"}
      descriptions={[]}
      viewDetails={true} />
  );
  // TODO: update test later
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
