// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Customer Imports
import Training from "./Training";
// Custom CSS
import './TrainingList.css';
// Data
import trainingData from "../../data/training.json";

class TrainingList extends React.Component {
  render () {
    return (
      <div className="training-list-component">
      {trainingData.map((td, idx) => 
        <Training name={td.name}
                  description={td.description}
                  startDate={td.startDate}
                  endDate={td.endDate}
                  webLink={td.webLink} />
      )}
      </div>
  );
  } 
}

export default TrainingList;
