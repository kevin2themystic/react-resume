import React from "react";

export interface EducationProps {
  institution: String;
  programName: String;
  startDate: String;
  endDate: String;
  location: String;
}

class Education extends React.Component<EducationProps, {}> {
  render () {
    return (
      <div className="education">
        <div className="ed-organization">{this.props.institution}</div>
        <div className="ed-program-name">{this.props.programName}</div>
        <div className="ed-dates">{this.props.startDate} to {this.props.endDate}</div>
        <div className="ed-location">{this.props.location}</div>
      </div>
    );
  } 
}

export default Education;
