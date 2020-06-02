import React from "react";
import Container from "@material-ui/core/Container"
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Objective from "./Components/Objective/Objective";
import SkillList from "./Components/Skills/SkillList";
import WorkExperienceList from "./Components/WorkExperience/WorkExperienceList";
import EducationList from "./Components/Education/EducationList";
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
      </Container>
    </div>
  );
}

export default App;
