import React from "react";
import Education from "./education";
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
