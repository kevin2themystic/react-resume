// Main Imports
import React from "react";
// Material UI

// Custom CSS
import "./Objective.css";
// Data
import objectiveData from "../../data/objective.json";

class Objective extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="sectionHeader">Objective</div>
        <p>{objectiveData.objective1}</p>  
        <p>{objectiveData.objective2}</p>  
        <p>{objectiveData.objective3}</p>  
        <p>{objectiveData.objective4}</p>        
      </div>
    );
  } 
}

export default Objective;
