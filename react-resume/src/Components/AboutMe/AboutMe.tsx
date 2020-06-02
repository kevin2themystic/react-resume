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
    <div className="aboutme-component">
    <div>{aboutMeData.aboutme}</div>
      <div>Total Years Experience: {aboutMeData.totalYearsExperience}</div>
      <div>Top Skills: {aboutMeData.topSkills}</div>
    </div>
  );
  } 
}

export default AboutMe;
