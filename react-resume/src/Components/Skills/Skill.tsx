// Main Imports
import React from 'react';
// Material UI
//import Avatar from "@material-ui/core/Avatar";
// Custom CSS
import './Skill.css';

export interface SkillProps {
  skill: string
}

class Skill extends React.Component<SkillProps, {}> {
  render () {
    return (
      <div className="skill-component">
        {this.props.skill}
      </div>
  );
  } 
}

export default Skill;
