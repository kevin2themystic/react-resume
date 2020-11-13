import React from 'react';
import Skill from "./Skill";
import SkillModel from "../../Models/SkillModel";
import './SkillCategory.css';


export interface SkillCategoryProps {
  category: string;
  skills: SkillModel[],
  categoryIDX: number;
}

class SkillList extends React.Component<SkillCategoryProps, {}> {
  render () {
    return (
      <div className="skill-category-component">
        <div className="skill-category">{this.props.category}</div>
        <div className="row">
          {this.props.skills.map((skill) => 
            <div key={skill.skillID} className="col-md-2">
              <Skill skill={skill.skill} />
            </div>
          )}
        </div>
      </div>
  );
  } 
}

export default SkillList;
