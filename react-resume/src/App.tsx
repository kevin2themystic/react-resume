// Default Imports
import React from "react";
import { Switch, NavLink, Route, BrowserRouter as Router } from "react-router-dom";
// Material UI Imports
import Container from "@material-ui/core/Container";
// Custom Imports
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import AboutThisSite from "./Components/AboutThisSite/AboutThiSite"; 
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
          <div className="menu">
            <div className="links">
                <NavLink to="/about-me" className="menu-link btn">About Me</NavLink>
                <NavLink to="/work-xperience" className="menu-link btn">Work Experience</NavLink>
                <NavLink to="/education" className="menu-link btn">Education</NavLink>
                <NavLink to="/training" className="menu-link btn">Training</NavLink>
                <NavLink to="/about-this-site" className="menu-link btn">About This Site</NavLink>
            </div>
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
        </Router>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
