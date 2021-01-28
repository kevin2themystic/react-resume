// Main Imports
import React from "react";

class Footer extends React.Component {

  render () {
    return (
      <div className="component footer-component">
        <footer className="copywrite">
            © {new Date().getFullYear()} Kevin Parkinson | Peak Self Living Inc.
        </footer>
      </div>
    );
  } 
}

export default Footer;
