// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom CSS
import './Training.css';

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
      <div className="component">
        <div><a href={this.props.webLink} target="_blank" rel="noopener noreferrer">{this.props.name} - {this.props.description}</a> - {this.props.startDate} </div>
      </div>
  );
  } 
}

export default Training;
