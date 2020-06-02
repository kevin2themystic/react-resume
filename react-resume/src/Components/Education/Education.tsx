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
    <div className="education-component">
    </div>
  );
  } 
}

export default Education;
