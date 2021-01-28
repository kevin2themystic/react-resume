// Main Imports
import React from 'react';

export interface TrainingProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  webLink: string;
}

class Training extends React.Component<TrainingProps, {}> {
  render () {
    return (
      <div className="section-section">
        <div><a href={this.props.webLink} className="link" target="_blank" rel="noopener noreferrer">{this.props.name}</a> - {this.props.startDate} </div>
      </div>
  );
  } 
}

export default Training;
