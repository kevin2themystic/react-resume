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
      <div className="section">
        <div className="sectionHeader">SKILLS</div>
        <div className="card card-body">
          {skillData.map((skillCategory) => 
            <SkillCategory key={skillCategory.categoryID} 
                          categoryIDX={skillCategory.categoryID} 
                          category={skillCategory.category} 
                          skills={skillCategory.skills} />
          )} 
        </div>
      </div>
  );
  } 
}

export default SkillList;
