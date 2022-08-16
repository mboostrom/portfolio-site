import React from "react"

const AboutSection = (props) => {
  return (
    <>
      <div className="about-section">
        <div className="about-header">
          <h3>How I work</h3>
          <p>Listen, review, research, create options, and develop and proof them.<br />Repeat until well done.</p>
        </div>
        <div className="about-tile-section">
          <div className="about-tile">
            <div className="about-pic about-tile-picture-1"></div>
            <h5>Problem solving</h5>
            <p>
              Challenges create opportunities and figuring out creative solutions is something I
              like to do.
            </p>
          </div>
          <div className="about-tile about-tile-3">
            <div className="about-pic about-tile-picture-2"></div>
            <h5>Detailed</h5>
            <p>
              Working from mockups and duplicating the user experience while rendering a fast
              development environment.
            </p>
          </div>
          <div className="about-tile">
            <div className="about-pic about-tile-picture-3"></div>
            <h5>Hard working</h5>
            <p>
              A proven track record of meeting goals and KPIs while enjoying what I do and learning
              new languages.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
