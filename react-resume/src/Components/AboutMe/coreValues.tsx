import React from "react";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StraightenIcon from '@material-ui/icons/Straighten';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dataService from "../../services/dataService";

function CoreValues() {
    return (
        <div className="row about-me-section">     
        <div className="col-md-3">
          <Card className="about-me-core-value">
            <CardContent>
              <StraightenIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></StraightenIcon>
              <Typography variant="h5" component="h2">
              {dataService.aboutMe.coreValues[0]}
              </Typography>
              <Typography color="textSecondary" className="core-value-text">
                {dataService.aboutMe.coreValues[1]}
              </Typography>
            </CardContent>
          </Card>          
        </div>
        <div className="col-md-3">      
          <Card className="about-me-core-value">
            <CardContent>
              <FavoriteBorderIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></FavoriteBorderIcon>
              <Typography variant="h5" component="h2">
              {dataService.aboutMe.coreValues[2]}
              </Typography>
              <Typography color="textSecondary" className="core-value-text">
                {dataService.aboutMe.coreValues[3]}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-md-3">       
          <Card className="about-me-core-value">
            <CardContent>
              <GroupWorkIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></GroupWorkIcon>
              <Typography variant="h5" component="h2">
              {dataService.aboutMe.coreValues[4]}
              </Typography>
              <Typography color="textSecondary" className="core-value-text">
                {dataService.aboutMe.coreValues[5]}
              </Typography>
            </CardContent>
          </Card>
        </div> 
        <div className="col-md-3">       
          <Card className="about-me-core-value">
            <CardContent>
              <FilterCenterFocusIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></FilterCenterFocusIcon>
              <Typography variant="h5" component="h2">
              {dataService.aboutMe.coreValues[6]}
              </Typography>
              <Typography color="textSecondary" className="core-value-text">
                {dataService.aboutMe.coreValues[7]}
              </Typography>
            </CardContent>
          </Card>
        </div>     
      </div>
    )
}

export default CoreValues;