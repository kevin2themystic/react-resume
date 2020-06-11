// Main Imports
import React from "react";
// Material UI
import Typography from '@material-ui/core/Typography';
// Custom CSS
import "./Objective.css";
// Data
import objectiveData from "../../data/objective.json";

class Objective extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="sectionHeader">Objective</div>
        <Typography variant="body1">
          {objectiveData.objective}
        </Typography>        
      </div>
  );
  } 
}

export default Objective;
