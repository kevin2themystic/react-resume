// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom CSS
import './Training.css';

export interface TrainingProps {
  name: String;
  description: String;
  startDate: String;
  endDate: String;
  webLink: String;
}

class Training extends React.Component<TrainingProps, {}> {
  render () {
    return (
      <div className="training-component">
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        <div>{this.props.startDate}</div>
        <div>{this.props.endDate}</div>
        <div>{this.props.webLink}</div>
      </div>
  );
  } 
}

export default Training;
