import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helper';
import { Link } from 'react-router-dom'

function Nav() {

  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <Link to="/">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">
            My Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
           My Resume
          </Link>
        </li>
    </ul>
    </nav>

  );
}

export default Nav;