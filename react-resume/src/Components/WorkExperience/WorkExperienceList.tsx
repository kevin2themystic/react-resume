// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom Imports
import WorkExperience from "./WorkExperience";
// Custom CSS
import './WorkExperienceList.css';
// Data
import workExperienceData from "../../data/workexperience.json";

class WorkExperienceList extends React.Component {
  render () {
    return (
      <div className="section">
        <div className="sectionHeader">PROFESSIONAL EXPERIENCE</div>
        {workExperienceData.filter(we => we.type === "professional").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          experiences={we.experiences} />
        )}
        <div className="sectionHeader">INTERNSHIPS</div>
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
