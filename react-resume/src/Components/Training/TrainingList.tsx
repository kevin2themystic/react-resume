// Main Imports
import React from 'react';
// Customer Imports
import Training from "./Training";
// Data
import trainingData from "../../data/training.json";

class TrainingList extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="section-header">PLURALSIGHT</div>
        {trainingData.filter(tr => tr.description.toLowerCase() === "pluralsight").map((td, idx) => 
          <Training key={idx} name={td.name}
                    description={td.description}
                    startDate={td.startDate}
                    endDate={td.endDate}
                    webLink={td.webLink} />
        )}
        <div className="section-header">TEACHABLE</div>
        {trainingData.filter(tr => tr.description.toLowerCase() === "teachable").map((td, idx) => 
          <Training key={idx} name={td.name}
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
