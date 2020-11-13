// Main Imports
import React from "react";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
// Custom CSS
import "./Header.css";
// Data
import headerData from "../../data/header.json";

class Header extends React.Component {

  render () {
    return (
      <div className="component">
        <Grid>
          <Grid item>
            <Avatar alt={headerData.name} 
                    src={headerData.avatar} 
                    style={{width: 150, height: 150}} />          
          </Grid>  
          <Grid item>
            <div className="resumeName">
              {headerData.name}
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-smile-o blueIcon"></i>
              <span className="resumeTitle pl-2">{headerData.title}</span>
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-phone blueIcon"></i>
              <span className="resumePhone pl-2">{headerData.phone}</span>
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-envelope blueIcon"></i>
              <span className="resumeEmail pl-2">{headerData.email}</span>
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-file-pdf-o blueIcon"></i>
              <a className="resumePDF pl-2" href={headerData.pdfResume}>View My Resume in PDF</a>
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-briefcase blueIcon"></i>
              <a className="resumePDF pl-2" href={headerData.portfolio} target="_blank" rel="noopener noreferrer">View My Portfolio</a>
            </div>
          </Grid>
        </Grid>       
        
      </div>
  );
  } 
}

export default Header;
