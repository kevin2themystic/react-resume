import React from 'react';
import Training from "./training";
import dataService from "../../services/dataService";

function TrainingList () {
  return (
    <div className="component training-scroll">
      <div className="section-header">PLURALSIGHT</div>
      {
        dataService.training.map((td, idx) => 
          <Training key={idx} 
            name={td.name}
            platform={td.platform}
            startDate={td.startDate}
            endDate={td.endDate}
            webLink={td.webLink} />
        )
      }
    </div>
  );
}

export default TrainingList;
