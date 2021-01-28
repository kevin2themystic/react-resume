// Main Imports
import React from "react";
// Data
import aboutMeData from "../../data/aboutme.json";
// Data
import objectiveData from "../../data/objective.json";

class AboutThiSite extends React.Component {
  render () {
    return (
    <div className="component">
      <div className="section-header">ABOUT THIS SITE</div>
      <div className="section-section">
        This site was built with:
        <ul>
          <li>create-react-app</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Material-UI</li>
          <li>React Testing Library</li>
          <li>GitHub Pages</li>            
        </ul>         
      </div>  
    </div>
  );
  } 
}

export default AboutThiSite;
