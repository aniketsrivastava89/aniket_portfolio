// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end activeclassname="active">About</NavLink></li>
        <li><NavLink to="/experience" activeclassname="active">Experience</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
        <li><NavLink to="/skills" activeclassname="active">Skills</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        <li><NavLink to="/certifications" activeclassname="active">Certifications</NavLink></li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
