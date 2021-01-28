// Main Imports
import React from "react";
// Custom Imports
import Education from "./Education";
// Data
import eductionData from "../../data/education.json";

class EducationList extends React.Component {
  render () {
    return (
    <div className="component">
      <div className="section-header">EDUCATION</div>
      {eductionData.map((ed, idx) => 
        <Education key={idx} institution={ed.institution}
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
