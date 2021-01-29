// Main Imports
import React from "react";
// Data
import aboutMeData from "../../data/aboutme.json";
// Data
import objectiveData from "../../data/objective.json";

class AboutMe extends React.Component {
  render () {
    return (
    <div className="component">
      <div className="section-header">ABOUT ME</div>
      <div className="section-section">Total Years Experience: {new Date().getFullYear() - 2007}</div>
      <div className="section-section">{aboutMeData.aboutMe1}</div>  
      <div className="section-section">{aboutMeData.aboutMe2}</div>  
      <ul>        
        {aboutMeData.organizationTypes.map((ot, idx) => 
            <li key={idx}>{ot}</li>
          )}
      </ul>

      <div>My core values are:</div>
      <ul>        
        {aboutMeData.coreValues.map((cv, idx) => 
            <li key={idx}>{cv}}</li>
          )}
      </ul>
      
      <div className="section-section">{aboutMeData.aboutMe3}</div>  
      <div className="section-section">{aboutMeData.aboutMe4}</div> 
      <div className="section-header">OBJECTIVE</div>
      <p className="section-section">{objectiveData.objective1}</p>  
      <p className="section-section">{objectiveData.objective2}</p>  
      <p className="section-section">{objectiveData.objective3}</p>  
      <p className="section-section">{objectiveData.objective4}</p>
    </div>
  );
  } 
}

export default AboutMe;
