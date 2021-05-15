import React from 'react';

export interface TrainingProps {
  name: string;
  platform: string;
  startDate: string;
  endDate: string;
  webLink: string;
}

class Training extends React.Component<TrainingProps, {}> {
  render () {
    return (
      <div className="section-section">
        <div>
          <a href={this.props.webLink} 
            className="link" 
            target="_blank" 
            rel="noopener noreferrer">{this.props.name}</a>{this.props.startDate} on {this.props.platform} </div>
      </div>
    );
  } 
}

export default Training;
