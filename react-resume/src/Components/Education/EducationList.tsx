import React from "react";
import Education from "./education";
import dataService from "../../services/dataService";

function EducationList () {
  return (
    <div className="component education-scroll">
      <div className="section-header">EDUCATION</div>
      {dataService.eduction.map((ed, idx) => 
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

export default EducationList;
