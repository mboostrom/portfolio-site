import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <span className="name">Max Boostrom |</span> Full Stack Developer
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu-options">
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <a href="https://www.linkedin.com/in/max-boostrom/">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mboostrom">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
