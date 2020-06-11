// Main Imports
import React from "react";
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom CSS
import "./Education.css";

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
      <div className="edOrganization">{this.props.institution}</div>
      <div className="edProgramName">{this.props.programName}</div>
      <div className="edDates">{this.props.startDate} to {this.props.endDate}</div>
      <div className="edLocation">{this.props.location}</div>
    </div>
  );
  } 
}

export default Education;
