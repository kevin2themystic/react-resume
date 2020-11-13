// Main Imports
import React from "react";
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom CSS
import "./AboutMe.css";
// Data
import aboutMeData from "../../data/aboutme.json";

class AboutMe extends React.Component {
  render () {
    return (
    <div className="section">
      <div className="sectionHeader">ABOUT ME</div>
      <div className="sectionSection">{aboutMeData.aboutme}</div>
      <div className="sectionSection">Total Years Experience: {aboutMeData.totalYearsExperience}</div>
      <div className="sectionSection">Top Skills: {aboutMeData.topSkills}</div>
    </div>
  );
  } 
}

export default AboutMe;
