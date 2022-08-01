import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = (props) => {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="contact-link-section">
        <a href="mailto:maxboostrom@gmail.com" className="email">
          <div className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <p>maxboostrom@gmail.com</p>
          </div>
          <a href="https://www.linkedin.com/in/max-boostrom/" target="_blank">
            <div className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
              <p>linkedin</p>
            </div>
          </a>
          <a href="https://github.com/mboostrom" target="_blank">
            <div className="contact-link">
              <FontAwesomeIcon icon={faGithub} size="xl" />
              <p>Github</p>
            </div>
          </a>
        </a>
      </div>
    </div>
  )
}

export default Contact
