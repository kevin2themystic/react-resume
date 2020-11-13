// Default Imports
import React from "react";
import { Switch, NavLink, Route, BrowserRouter as Router } from "react-router-dom";
// Material UI Imports
import Container from "@material-ui/core/Container";
// Custom Imports
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Objective from "./Components/Objective/Objective";
import SkillList from "./Components/Skills/SkillList";
import WorkExperienceList from "./Components/WorkExperience/WorkExperienceList";
import EducationList from "./Components/Education/EducationList";
import TrainingList from "./Components/Training/TrainingList";
import Footer from "./Components/Footer/Footer";
// 3rd Party CSS Imports
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse.js";
// Custom CSS Imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Header />  
        <Router>
          <div className="component">
            <div className="links">
                <NavLink to="/aboutme" className="link">About Me</NavLink>
                <NavLink to="/objective" className="link">Objective</NavLink>
                <NavLink to="/skills" className="link">Skills</NavLink>
                <NavLink to="/workexperience" className="link">Work Experience</NavLink>
                <NavLink to="/education" className="link">Education</NavLink>
                <NavLink to="/training" className="link">Training</NavLink>
            </div>
            <Switch>
                <Route exact path="/" component={ WorkExperienceList }/>
                <Route exact path="/aboutme" component={ AboutMe }/>
                <Route exact path="/objective" component={ Objective }/> 
                <Route exact path="/skills" component={ SkillList }/>
                <Route exact path="/workexperience" component={ WorkExperienceList }/>  
                <Route exact path="/education" component={ EducationList }/>
                <Route exact path="/training" component={ TrainingList }/>            
                <Route exact render={ () => <h2>No content found.</h2> }/>
            </Switch>            
          </div>
        </Router>
        {/* <AboutMe />
        <Objective />
        <SkillList />
        <WorkExperienceList />
        <EducationList />
        <TrainingList /> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
