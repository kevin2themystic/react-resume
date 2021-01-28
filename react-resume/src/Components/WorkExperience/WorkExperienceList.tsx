// Main Imports
import React from 'react';
// Custom Imports
import WorkExperience from "./WorkExperience";
// Data
import workExperienceData from "../../data/workexperience.json";

class WorkExperienceList extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="section-header">PROFESSIONAL EXPERIENCE</div>
        {workExperienceData.filter(we => we.type === "professional").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          experiences={we.experiences} />
        )}
        <div className="section-header">INTERNSHIPS</div>
        {workExperienceData.filter(we => we.type === "internship").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          experiences={we.experiences} />
        )}
      </div>
  );
  } 
}

export default WorkExperienceList;
