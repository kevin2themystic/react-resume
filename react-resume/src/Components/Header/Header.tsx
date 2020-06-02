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
      <div className="header-component">
        <Grid>
          <Grid item>
            <Avatar alt={headerData.name} src={headerData.avatar} style={{width: 150, height: 150}} />          
          </Grid>  
          <Grid item>
            <div className="resumeName">{headerData.name}</div>
          </Grid>
          <Grid item>
            <div className="resumeTitle">{headerData.title}</div>
          </Grid>
          <Grid item>
            <div className="resumePhone">{headerData.phone}</div>
          </Grid>
        </Grid>       
        
      </div>
  );
  } 
}

export default Header;
