// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom Imports

export interface WorkExperienceProps {
  organization: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  descriptions: string[];
}

class WorkExperience extends React.Component<WorkExperienceProps, {}> {
  render () {
    return (
      <div className="work-experience">
        <div className="weOrganization">{this.props.organization}</div>
        <div className="weTitle">{this.props.title}</div>
        <div className="weMoreInfo">
          {this.props.startDate} to {this.props.endDate} in {this.props.location}
        </div>
        <ul>
          {this.props.descriptions.map((weexperience, idx) => 
            <li key={idx}>{weexperience}</li>
          )}
        </ul>
      </div>
  );
  } 
}

export default WorkExperience;
