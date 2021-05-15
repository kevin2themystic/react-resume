import React from 'react';

export interface WorkExperienceProps {
  organization: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  descriptions: string[];
  viewDetails: boolean;
}

class WorkExperience extends React.Component<WorkExperienceProps, {}> {
  render () {
    return (
      <div className="work-experience">
        <div className="we-organization">{this.props.organization}</div>
        <div className="we-title">{this.props.title}</div>
        <div className="we-more-info">
          {this.props.startDate} to {this.props.endDate} in {this.props.location} ({this.props.locationType})
        </div>
        {this.props && !this.props.endDate && <div className="we-currently-position">currently working here</div> }
        {this.props && this.props.viewDetails &&
          <ul>
            {this.props.descriptions.map((weexperience, idx) => 
              <li key={idx}>{weexperience}</li>
            )}
          </ul>        
        }
      </div>
    );
  } 
}

export default WorkExperience;
