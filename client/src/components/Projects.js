import React from "react"
import ReviewButton from "./ReviewButton"

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="recents">
        <h3>Recent UX Projects</h3>
        <p>Single page projects focussing on front-end technologies</p>
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
          <ReviewButton />
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
          <ReviewButton />
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
          <ReviewButton />
        </div>
      </div>
    </div>
  )
}

export default Projects
