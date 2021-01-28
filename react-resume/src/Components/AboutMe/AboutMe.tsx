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
      <div className="section-section">{aboutMeData.aboutme}</div>
      <div className="section-section">Total Years Experience: {aboutMeData.totalYearsExperience}</div>
      <div className="section-section">Top Skills: {aboutMeData.topSkills}</div>      
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
