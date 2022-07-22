import React from "react"

const OriginalConcept = (props) => {
  return (
    <div className="concept-section">
      <div className="about-project">
        <h3>
          Original concept
          <br />
          and development
        </h3>
        <p>
          Back Nine is a full stack web application built using JavaScript, node.JS and React. It is
          a golf data app that encourages golfers of all skill levels to keep track of their scores
          and get real time data of their scoring averages. With this the user can also look up any
          course in the world. Utilizing the google maps API, the find courses tab will pull up
          satellite map of the course you search for to get a sense of what the course is like
          before playing.
        </p>
        <div className="review-button">
          <a href="https://back-nine.herokuapp.com/" target="_blank">Review the project</a>
        </div>
      </div>
      <div className="BN-pic-1"></div>
      <div className="BN-pic-2"></div>
    </div>
  )
}

export default OriginalConcept
