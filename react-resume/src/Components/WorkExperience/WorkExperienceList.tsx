// Main Imports
import React from 'react';
// Custom Imports
import WorkExperience from "./WorkExperience";
// MAterial UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// Data
import workExperienceData from "../../data/workexperience.json";

interface WorkExperienceState {
  simplifiedView: boolean
}

class WorkExperienceList extends React.Component<{}, WorkExperienceState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      simplifiedView: true
    }
  }

  render () {
    return (
      <div className="component">
        <div className="section-header">PROFESSIONAL EXPERIENCE</div>
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
          <FormControlLabel
            control={<Switch checked={this.state.simplifiedView} color="primary" onChange={this.handleViewChange} name="gilad" />}
            label="Simplified View"
          />
          </div>
        </div>
        {workExperienceData.filter(we => we.type === "professional").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          descriptions={this.state.simplifiedView ? we.experiencesSimplified : we.experiences} />
        )}
        <div className="section-header">INTERNSHIPS</div>
        {workExperienceData.filter(we => we.type === "internship").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          descriptions={this.state.simplifiedView ? we.experiencesSimplified : we.experiences} />
        )}
      </div>
    );
  } 

  handleViewChange = () => {
    this.setState({simplifiedView: !this.state.simplifiedView});
  }
}

export default WorkExperienceList;
