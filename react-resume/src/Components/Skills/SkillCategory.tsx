import React from 'react';
import Skill from "./Skill";
import './SkillCategory.css';

export interface SkillCategoryProps {
  category: string;
  skills: string[]
}

class SkillList extends React.Component<SkillCategoryProps, {}> {
  render () {
    return (
      <div className="skill-category-component">
        <div className="skill-category">{this.props.category}</div>
        <div className="row">
          {this.props.skills.map((skill, idx) => 
            <div className="col-md-2">
              <Skill key={idx} skill={skill} />
            </div>
          )}
        </div>
      </div>
  );
  } 
}

export default SkillList;
