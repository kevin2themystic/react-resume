// Main Imports
import React from "react";
// Material UI
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessIcon from '@material-ui/icons/Business';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StraightenIcon from '@material-ui/icons/Straighten';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Data
import aboutMeData from "../../data/aboutme.json";
// Data
import objectiveData from "../../data/objective.json";

class AboutMe extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="section-header">ABOUT ME</div>
        <div className="about-me-section">
          <div className="section-section">{aboutMeData.aboutMe1}</div>  
          <a className="btn btn-success" href="mailto:kevin@peakselfliving.com?subject=I Saw Your Resume Online">Contact Me</a>
        </div>
        <div className="row about-me-section">
          <div className="col-md-12 about-me-text">
            Extensive experience with:
            <ul>
              <li className="about-me-text">{aboutMeData.aboutMe3}</li>
              <li className="about-me-text">{aboutMeData.aboutMe4}</li>
              <li className="about-me-text">{aboutMeData.aboutMe5}</li>
            </ul>
          </div> 
        </div>
        <div className="row about-me-section">
          <div className="col-md-12 section-subheader">
            {aboutMeData.aboutMe2}
          </div>   
          <div className="col-md-4">      
            <Card className="about-me-sector">
              <CardContent>
                <AccountBalanceIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></AccountBalanceIcon>
                <Typography variant="h5" component="h2">
                  Provincial Government Projects
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.organizationTypes[0]}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">      
            <Card className="about-me-sector">
              <CardContent>
                <LocationCityIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></LocationCityIcon>
                <Typography variant="h5" component="h2">
                  Municipal and Small Provincial Government Related Projects
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.organizationTypes[1]}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">       
            <Card className="about-me-sector">
              <CardContent>
                <BusinessIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></BusinessIcon>
                <Typography variant="h5" component="h2">
                  Small Business and Startup Projects
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.organizationTypes[2]}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>   
        <div className="row about-me-section">             
          <div className="col-md-12 section-subheader">Objective</div>  
          <div className="col-md-12 about-me-text">
            {objectiveData.objective1}
          </div>   
          <div className="col-md-12 about-me-text">
            {objectiveData.objective2}
          </div>   
          <div className="col-md-12 about-me-text">
            {objectiveData.objective3}
          </div>   
          <div className="col-md-12 about-me-text">
            {objectiveData.objective4}
          </div> 
        </div> 
        
        <div className="row about-me-section">
          <div className="col-md-12 section-subheader">Core Values</div>        
          <div className="col-md-3">
            <Card className="about-me-core-value">
              <CardContent>
                <StraightenIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></StraightenIcon>
                <Typography variant="h5" component="h2">
                {aboutMeData.coreValues[0]}
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.coreValues[1]}
                </Typography>
              </CardContent>
            </Card>          
          </div>
          <div className="col-md-3">      
            <Card className="about-me-core-value">
              <CardContent>
                <FavoriteBorderIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></FavoriteBorderIcon>
                <Typography variant="h5" component="h2">
                {aboutMeData.coreValues[2]}
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.coreValues[3]}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">       
            <Card className="about-me-core-value">
              <CardContent>
                <GroupWorkIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></GroupWorkIcon>
                <Typography variant="h5" component="h2">
                {aboutMeData.coreValues[4]}
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.coreValues[5]}
                </Typography>
              </CardContent>
            </Card>
          </div> 
          <div className="col-md-3">       
            <Card className="about-me-core-value">
              <CardContent>
                <FilterCenterFocusIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></FilterCenterFocusIcon>
                <Typography variant="h5" component="h2">
                {aboutMeData.coreValues[6]}
                </Typography>
                <Typography color="textSecondary">
                  {aboutMeData.coreValues[7]}
                </Typography>
              </CardContent>
            </Card>
          </div>     
        </div>    
      </div>
    );
  } 
}

export default AboutMe;
