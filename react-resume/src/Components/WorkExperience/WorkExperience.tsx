// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom Imports
// Custom CSS
import './WorkExperience.css';

export interface WorkExperienceProps {
  organization: String;
  title: String;
  startDate: String;
  endDate: String;
  location: String;
  experiences: String[]
}

class WorkExperience extends React.Component<WorkExperienceProps, {}> {
  render () {
    return (
      <div className="work-experience-component">
      <div>{this.props.organization}</div>
      <div>{this.props.title}</div>
      <div>{this.props.startDate}</div>
      <div>{this.props.endDate}</div>
      <div>{this.props.location}</div>
      <div>
        <h6>Experiences</h6>
        <ul>
          {this.props.experiences.map((weexperience, index) => 
            <li>{weexperience}</li>
          )}
        </ul>
      </div>
      </div>
  );
  } 
}

export default WorkExperience;
