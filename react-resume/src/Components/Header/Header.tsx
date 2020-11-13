// Main Imports
import React from "react";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// Custom CSS
import "./Header.css";
// Data
import headerData from "../../data/header.json";

interface HeaderProps {
}

interface HeaderState {
  anchorEl: any
  isMenuOpen: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {

  constructor (props: HeaderProps) {
    super(props);
    this.state = {
      anchorEl: null,
      isMenuOpen: false
    };
  }

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
              <a className="resumePDF pl-2" 
                href={headerData.pdfResume} 
                target="_blank" rel="noopener noreferrer" 
                download={headerData.pdfResumeName}>View My Resume in PDF</a>
            </div>
          </Grid>
          <Grid item>
            <div>
              <i className="fa fa-briefcase blueIcon"></i>
              <a className="resumePDF pl-2" href={headerData.portfolio} target="_blank" rel="noopener noreferrer">View My Portfolio</a>
            </div>
          </Grid>
        </Grid>   
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={this.state.isMenuOpen}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>About Me</MenuItem>
            <MenuItem onClick={this.handleClose}>Objective</MenuItem>
            <MenuItem onClick={this.handleClose}>Skills</MenuItem>
            <MenuItem onClick={this.handleClose}>Work Experience</MenuItem>
            <MenuItem onClick={this.handleClose}>Education</MenuItem>
            <MenuItem onClick={this.handleClose}>Personal Training and Development</MenuItem>
          </Menu>
        </div>      
        
      </div>
    );
  } 
  handleClose = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
      isMenuOpen: false
    });
  };
  handleClick = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
      isMenuOpen: true
    });
  };
}

export default Header;
