import React from "react";
import { NavLink } from "react-router-dom";

function Menu () {
    return (
        <div className="menu">
            <NavLink to="/about-me" className="menu-link btn">About Me</NavLink>
            <NavLink to="/work-xperience" className="menu-link btn">Work Experience</NavLink>
            <NavLink to="/education" className="menu-link btn">Education</NavLink>
            <NavLink to="/training" className="menu-link btn">Training</NavLink>
            <NavLink to="/about-this-site" className="menu-link btn">About This Site</NavLink>
        </div>
    );
}

export default Menu;