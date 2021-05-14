import React from "react";
import { Switch, Route, } from "react-router-dom";
import AboutMe from "./aboutMe/aboutMe";
import AboutThisSite from "./aboutThiSite"; 
import WorkExperienceList from "./workExperience/workExperienceList";
import EducationList from "./education/educationList";
import TrainingList from "./training/trainingList";

function ComponentContent () {
    return (
        <div className="component-content">
            <Switch>
                <Route exact path="/" component={ AboutMe }/>
                <Route exact path="/react-resume" component={ AboutMe }/>
                <Route exact path="/about-me" component={ AboutMe }/>
                <Route exact path="/work-xperience" component={ WorkExperienceList }/>  
                <Route exact path="/education" component={ EducationList }/>
                <Route exact path="/training" component={ TrainingList }/>   
                <Route exact path="/about-this-site" component={ AboutThisSite }/> 
                <Route exact render={ () => <div className="component">No content found.</div> }/>
            </Switch>              
        </div>
    );   
}

export default ComponentContent;