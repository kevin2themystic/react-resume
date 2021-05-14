import React from 'react';
import Training from "./training";
import trainingData from "../../data/training.json";

class TrainingList extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="section-header">PLURALSIGHT</div>
        {
          trainingData.filter(tr => tr.description.toLowerCase() === "pluralsight").map((td, idx) => 
            this.populateTraining(idx, td.name,td.description,td.startDate,td.endDate,td.webLink)
          )
        }
        <div className="section-header">TEACHABLE</div>
        {
          trainingData.filter(tr => tr.description.toLowerCase() === "teachable").map((td, idx) => 
            this.populateTraining(idx, td.name,td.description,td.startDate,td.endDate,td.webLink)
          )
        }
      </div>
    );
  }
  
  populateTraining = (idx: number, name: string, descr: string, startDt: string, endDt: string, link: string) => {
    return <Training key={idx} name={name}
                     description={descr}
                     startDate={startDt}
                     endDate={endDt}
                     webLink={link} />
  }
}

export default TrainingList;
