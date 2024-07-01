import React from 'react';
import { Link } from 'react-scroll';
import './navBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar d-flex align-items-center py-2 px-3 text-light justify-content-between">
      <div className="d-flex">
        <Link to="projects" smooth={true} duration={500} className="mx-3 nav-link">
          Project
        </Link>
        <Link to="about" smooth={true} duration={500} className="mx-3 nav-link">
          About
        </Link>
        <Link to="contact" smooth={true} duration={500} className="mx-3 nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
