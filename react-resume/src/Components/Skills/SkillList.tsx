// Main Imports
import React from 'react';
// Custom Imports
import SkillCategory from "./SkillCategory";
// Material UI

// Custom CSS
import './SkillList.css';
// Data
import skillData from "../../data/skills.json";

interface SkillListProps {
  
}

interface SkillListState {
  skillsCollapsed: boolean;
}
class SkillList extends React.Component {

  render () {
    return (
      <div className="component">
        <div className="sectionHeader">Skills</div>
        <a className="btn btn-primary m-2" 
            data-toggle="collapse" 
            href="#collapseExample" 
            aria-expanded="false" 
            aria-controls="collapseExample">
          Skills +/-
        </a>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            {skillData.map((skillCategory) => 
              <SkillCategory key={skillCategory.categoryID} 
                            categoryIDX={skillCategory.categoryID} 
                            category={skillCategory.category} 
                            skills={skillCategory.skills} />
            )} 
          </div>
        </div>         
      </div>
  );
  } 
}

export default SkillList;
