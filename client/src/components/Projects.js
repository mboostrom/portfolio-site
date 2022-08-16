import React from "react"
import ReviewButton from "./ReviewButton"

const Projects = (props) => {
  return (
    <div className="projects" id="projects-div">
      <div className="recents">
        <h3>Projects</h3>
        <p>
          Landing pages for PPC, Services and Content marketing.<br /> Focussing primarily on Frontend
          technologies.
        </p>
      </div>
      <div className="project-tile-section">
        <div className="project-tile">
          <div className="project-pic-1"></div>
          <div className="project-title">
            <h5>PPC Landing Page</h5>
            <p>JS | HTML5 | CSS3</p>
          </div>
          <p>
            Developed a landing page from a mockup supplied in Adobe XD using React, HTML, and
            Javascript. The header and footer are static.
          </p>
          <a
            href="https://college-landing-page.herokuapp.com/"
            target="_blank"
            className="review-button"
          >
            Review the project
          </a>
        </div>
        <div className="project-tile">
          <div className="project-pic-2"></div>
          <div className="project-title">
            <h5>Article Landing Page</h5>
            <p>JS | HTML5 | CSS3</p>
          </div>
          <p>
            Developed a landing page from a mockup supplied in Adobe XD using React, HTML, and
            Javascript. The header and footer are static.
          </p>
          <a
            href="https://article-landing-page.herokuapp.com/"
            target="_blank"
            className="review-button"
          >
            Review the project
          </a>
        </div>
        <div className="project-tile">
          <div className="project-pic-3"></div>
          <div className="project-title">
            <h5>Interactive Quiz</h5>
            <p>JS | HTML5 | CSS3</p>
          </div>
          <p>
            Developed an interactive quiz using React, HTML, and CSS. The header and footer are
            static but the remainder of the page is fully functional.
          </p>
          <a
            href="https://article-landing-page.herokuapp.com/"
            target="_blank"
            className="review-button"
          >
            Review the project
          </a>
        </div>
      </div>
      <div className="zen-desk">
        <div className="zendesk-pic"></div>
        <div className="project-title">
          <h5>Interactive Quiz</h5>
          <p>JS | HTML5 | CSS3</p>
        </div>
        <p className="zendesk-about">Developed an interactive quiz with logic built in creating customized results<br /> depending upon the answers.</p>
        <a
            href="https://article-landing-page.herokuapp.com/"
            target="_blank"
            className="review-button"
          >
            Review the project
          </a>
      </div>
    </div>
  )
}

export default Projects
