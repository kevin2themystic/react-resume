import React from "react";
import CoreValues from "./coreValues";
import IndustryExperience from "./industryExperience";
import dataService from "../../services/dataService";

function AboutMe () {
  return (
    <div className="component">
      <div className="section-header">ABOUT ME</div>
      <div className="row about-me-section">             
        <div className="col-md-12 objective">
          {dataService.objective.objective}
        </div>   
      </div> 
      <div className="row about-me-section">
        <div className="col-md-2"></div>
        <div className="col-md-8 about-me-text">
          <div className="cta contact-me">
            {getCallToAction(dataService.aboutMe.lookingForFullStackDev,
                                  dataService.aboutMe.contactMeBtn,
                                  "mailto:kevin@peakselfliving.com?subject=I am looking for a Full Stack Developer")}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>   
      <CoreValues />
      <div className="row about-me-section">
        <div className="col-md-4"></div>
        <div className="col-md-4 about-me-text text-center">
            {getCallToAction(dataService.aboutMe.interestedInPortfolio,
                                  dataService.aboutMe.checkoutPortfolioBtn,
                                  dataService.header.portfolio)}
        </div>
        <div className="col-md-4"></div>
      </div> 
      <IndustryExperience />  
    </div>
  );

  function getCallToAction(ctaText: string, ctaBtnText: string, ctaHref: string) {
    return <div className="cta">
            <div className="section-section">{ctaText}</div>  
            <a className="btn btn-success" href={ctaHref}>Contact Me</a>
          </div>
  }
}

export default AboutMe;
