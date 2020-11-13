// Main Imports
import React from "react";
// Custom CSS
import "./Footer.css";

class Footer extends React.Component {

  render () {
    return (
      <div className="component">
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">      
            <div className="row">      
              <div className="col-md-12 mt-md-0 mt-3">      
                <h5 className="text-uppercase">About This Site</h5>
                <p>This site was built with create-react-app, React, Typescript, React Testing Library and GitHub Pages.</p>      
              </div>      
            </div>
          </div>
          <div className="footer-copyright py-3">
            © 2020 Copyright: Peak Self Living Inc.
          </div>
        </footer>
      </div>
    );
  } 
}

export default Footer;
