// Main Imports
import React from "react";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
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
      <div className="component header-component">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Avatar alt={headerData.name} 
                    src={headerData.avatar} 
                    style={{width: 210, height: 210}} />          
          </Grid>  
          <Grid item xs={9}>
            <div className="resume-name">{headerData.name}</div>
            <div className="resume-title">{headerData.title}</div>
            <div className="resume-stack">{headerData.stack}</div>
            <div className="resume-contact-info">
              <i className="fa fa-phone header-icon"></i>
              <span className="resume-phone pl-2">{headerData.phone}</span>&nbsp;&nbsp; 

              <i className="fa fa-envelope header-icon"></i>
              <a className="header-link pl-2" 
                href={`mailto:` + headerData.pdfResume}>{headerData.email}</a>&nbsp;&nbsp;&nbsp;

              <i className="fa fa-file-pdf-o header-icon"></i>
              <a className="header-link pl-2" 
                href={headerData.pdfResume} 
                target="_blank" rel="noopener noreferrer" 
                download={headerData.pdfResumeName}>resume (pdf)</a>&nbsp;&nbsp;&nbsp; 

              <i className="fa fa-briefcase header-icon"></i>
              <a className="header-link pl-2" href={headerData.portfolio} target="_blank" rel="noopener noreferrer">portfolio</a>
            </div>            <div>
            </div>
          </Grid>
        </Grid>     
      </div>
    );
    }
}

export default Header;
