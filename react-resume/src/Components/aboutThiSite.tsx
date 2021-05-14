import React from "react";

function AboutThiSite () {
  return (
    <div className="component">
      <div className="section-header">ABOUT THIS SITE</div>
      <div className="section-section">This site was built with:</div>
      <div className="section-section">
        <ul>
          <li>create-react-app</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Material-UI</li>
          <li>Node Package manager (NPM)</li>
          <li>Yarn</li>
          <li>Sentry.io</li>
          <li>React Testing Library</li>
          <li>GitHub Pages</li>     
          <li>Visual Studio Code</li>            
        </ul>         
      </div> 
      <div className="section-section">
        Checkout the source code for this site on <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/kevin2themystic/react-resume">Github</a>
      </div> 
    </div>
  );
}

export default AboutThiSite;
