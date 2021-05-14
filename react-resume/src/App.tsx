import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Header from "./components/header";
import Menu from "./components/menu";
import ComponentContent from "./components/componentContent";
import Footer from "./components/footer";
import logger from "./services/logService";
import "./App.css";

function App() {
  logger.init();
  return (
    <div className="App">
      <Container fixed>
        <Header />  
        <Router>
          <div className="main-content">
            <Menu />
            <ComponentContent />          
          </div>
        </Router>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
