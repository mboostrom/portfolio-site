import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = props => {
  return(
    <div className="footer">
      <h3><span className="name">Max Boostrom |</span> Full Stack Developer</h3>
      <div className="footer-right">
        <ul className="footer-links">
        <li>
            <a href="https://www.linkedin.com/in/max-boostrom/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mboostrom" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer