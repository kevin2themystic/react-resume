import React from 'react';
import WorkExperience from "./workExperience";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
          this.populateWorkExperience(idx, we.organization, we.title, we.startDate,
                                      we.endDate, we.location,
                                      this.state.simplifiedDetailsView ? we.experiencesSimplified : we.experiences)
        )}
        <div className="section-header">INTERNSHIPS</div>
        {workExperienceData.filter(we => we.type === "internship").map((we, idx) => 
          this.populateWorkExperience(idx, we.organization, we.title, we.startDate,
                                      we.endDate, we.location,
                                      this.state.simplifiedDetailsView ? we.experiencesSimplified : we.experiences)
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
  
  populateWorkExperience = (idx: number, org: string, title: string, 
                            startDt: string, endDt: string, loc: string,
                            descriptions: string[]) => {
    return <WorkExperience key={idx} organization={org}
            title={title}
            startDate={startDt}
            endDate={endDt}
            location={loc}
            descriptions={descriptions}
            viewDetails={this.state.viewDetails} />
  }
}

export default WorkExperienceList;
