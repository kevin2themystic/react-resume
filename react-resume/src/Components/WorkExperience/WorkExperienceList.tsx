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
      <div className="component">
        <div className="sectionHeader">Professional Experience</div>
        {workExperienceData.map((we, idx) => 
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
