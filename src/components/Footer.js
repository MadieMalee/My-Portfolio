import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Madison Vercher©</h2>
      <ul className="social-links">
        <li className="logo">
          <a href="https://github.com/MadieMalee" aria-label="GitHub">
            <VscGithub />
            <span>GitHub</span>
          </a>
        </li>
        <li className="logo">
          <a href="https://www.linkedin.com/in/madison-vercher-68b8862a7/" aria-label="LinkedIn">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
      <p>Icons sourced from <a href="https://react-icons.github.io/react-icons/">React Icons</a></p>
    </footer>
  );
}

export default Footer;
