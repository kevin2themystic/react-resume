// Default Imports
import React from "react";
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
        <AboutMe />
        <Objective />
        <SkillList />
        <WorkExperienceList />
        <EducationList />
        <TrainingList />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
