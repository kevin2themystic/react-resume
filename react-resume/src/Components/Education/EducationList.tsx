// Main Imports
import React from "react";
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom Imports
import Education from "./Education";
// Custom CSS
import './EducationList.css';
// Data
import eductionData from "../../data/education.json";

class EducationList extends React.Component {
  render () {
    return (
    <div className="education-list-component">
      {eductionData.map((ed, idx) => 
        <Education institution={ed.institution}
                   programName={ed.programName}
                   startDate={ed.startDate}
                   endDate={ed.endDate}
                   location={ed.location} 
        />
      )}
    </div>
  );
  } 
}

export default EducationList;
