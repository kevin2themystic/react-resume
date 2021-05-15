import React from "react";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessIcon from '@material-ui/icons/Business';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dataService from "../../services/dataService";

function IndustryExperience() {
    return (
        <div className="row about-me-section">  
        <div className="col-md-4">      
          <Card className="about-me-sector">
            <CardContent>
              <AccountBalanceIcon color="primary" className="MuiSvgIcon-fontSizeLarge"></AccountBalanceIcon>
              <Typography variant="h5" component="h2">
                Provincial Government Projects
              </Typography>
              <Typography color="textSecondary" className="experience-with-text">
                {dataService.aboutMe.organizationTypes[0]}
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
              <Typography color="textSecondary" className="experience-with-text">
                {dataService.aboutMe.organizationTypes[1]}
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
              <Typography color="textSecondary" className="experience-with-text">
                {dataService.aboutMe.organizationTypes[2]}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div> 
    )
}

export default IndustryExperience;