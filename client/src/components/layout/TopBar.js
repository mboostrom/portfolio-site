import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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
          <li>
            <a href="#projects-div">Projects</a>
          </li>
          <a href="mailto:maxboostrom@gmail.com" className="email">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
          <li>
            <a
              href="https://www.linkedin.com/in/max-boostrom/"
              target="_blank"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mboostrom" target="_blank" className="github">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
