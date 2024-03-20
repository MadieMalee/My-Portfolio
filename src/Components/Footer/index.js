import React from "react";
import { Github } from "react-icons/vsc";
import { Linkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Madison Vercher©</h2>
      <ul className="social-links">
        <li className="logo">
          <a href="https://github.com/MadieMalee" aria-label="GitHub">
            <Github />
            <span>GitHub</span>
          </a>
        </li>
        <li className="logo">
          <a href="https://www.linkedin.com/in/madison-vercher-68b8862a7/" aria-label="LinkedIn">
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
      <p>Icons sourced from <a href="https://react-icons.github.io/react-icons/">React Icons</a></p>
    </footer>
  );
}

export default Footer;
