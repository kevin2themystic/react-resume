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
  viewDetails: boolean;
  simplifiedDetailsView: boolean;
}

class WorkExperienceList extends React.Component<{}, WorkExperienceState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      viewDetails: false,
      simplifiedDetailsView: true
    }
  }

  render () {
    return (
      <div className="component">
        <div className="section-header">PROFESSIONAL EXPERIENCE</div>
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-3">
            {this.state && this.state.viewDetails &&
              <FormControlLabel
                control={<Switch checked={this.state.simplifiedDetailsView} color="primary" onChange={this.handleSimplifiedDetailsChange} name="SimplifiedDetails" />}
                label="Simplified Details"
              />            
            }
          </div>
          <div className="col-md-2">
            <FormControlLabel
              control={<Switch checked={this.state.viewDetails} color="primary" onChange={this.handleViewDetailsChange} name="ViewDetails" />}
              label="View Details"
            />
          </div>
        </div>
        {workExperienceData.filter(we => we.type === "professional").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          descriptions={this.state.simplifiedDetailsView ? we.experiencesSimplified : we.experiences}
                          viewDetails={this.state.viewDetails} />
        )}
        <div className="section-header">INTERNSHIPS</div>
        {workExperienceData.filter(we => we.type === "internship").map((we, idx) => 
          <WorkExperience key={idx} organization={we.organization}
                          title={we.title}
                          startDate={we.startDate}
                          endDate={we.endDate}
                          location={we.location}
                          descriptions={this.state.simplifiedDetailsView ? we.experiencesSimplified : we.experiences}
                          viewDetails={this.state.viewDetails} />
        )}
      </div>
    );
  } 

  handleViewDetailsChange = () => {
    this.setState({viewDetails: !this.state.viewDetails});
  }

  handleSimplifiedDetailsChange = () => {
    this.setState({simplifiedDetailsView: !this.state.simplifiedDetailsView});
  }
}

export default WorkExperienceList;
