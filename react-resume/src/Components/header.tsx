import React from "react";
import Avatar from "@material-ui/core/Avatar";
import headerData from "../data/header.json";

function Header () {
  return (
    <div className="component header-component">
      <div className="row">
        <div className="col-md-3">
          <Avatar alt={headerData.name} 
                  src={headerData.avatar} 
                  style={{width: 210, height: 210}} />               
        </div>
        <div className="col-md-9">
          <div className="resume-contact-info">
            <div className="row">
              <div className="col-md-8">
                <div className="resume-name">{headerData.name}</div>
                <div className="resume-title">{headerData.title}</div>
                <div className="resume-stack">{headerData.stack}</div>                  
              </div>
              <div className="col-md-4">
                <div className="years-experience">
                  Total Years Experience: {new Date().getFullYear() - 2007} 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
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
              </div>
            </div>
          </div>             
        </div>
      </div>    
    </div>
  );
}

export default Header;
