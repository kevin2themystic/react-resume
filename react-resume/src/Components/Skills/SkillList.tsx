// Main Imports
import React from 'react';
// Material UI
import SkillCategory from "./SkillCategory";
// Custom CSS
import './SkillList.css';
// Data
import skillData from "../../data/skills.json";

class SkillList extends React.Component {
  render () {
    return (
      <div className="component">
        <div className="sectionHeader">Skills</div>
        {skillData.map((skillCategory, idx) => 
          <SkillCategory key={idx} category={skillCategory.category} skills={skillCategory.skills} />
        )}
      </div>
  );
  } 
}

export default SkillList;
