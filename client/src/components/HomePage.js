import React from "react"
import AboutSection from "./AboutSection"
import Projects from "./Projects"
import OriginalConcept from "./OriginalConcept"
import Footer from "./Footer"
import Contact from "./Contact"

const HomePage = (props) => {
  const h1 = "<h1>"
  const h1Close = "</h1>"
  const p = "<p>"
  const pClose = "</p>"
  const div = "<div>"
  const divClose = "</div>"
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <p className="code">{div}</p>
          <p className="code h1-open">{h1}</p>
          <p className="hello">hello.</p>
          <p className="code h1-close">{h1Close}</p>
          <p className="code p-open">{p}</p>
          <p className="header-p">I am highly motivated and skilled in web development. I am fluent in JavaScript,
          React, Node.js, HTML5, and CSS3.</p>
          <p className="code p-close">{pClose}</p>
          <p className="code">{divClose}</p>
        </div>
      </div>
      <div className="home-page">
        <div className="back-nine-header"></div>
        <div className="technologies">
          <div className="logo tech-logo-1"></div>
          <div className="logo tech-logo-2"></div>
          <div className="logo tech-logo-3"></div>
          <div className="logo tech-logo-4"></div>
          <div className="logo tech-logo-5"></div>
        </div>
        <div className="about">
          <p>
            I have over 5 years of successful consumer management and communications combined with a
            strong visual background and a tenacity for development languages. I truly enjoy what I
            do.
          </p>
        </div>
        <AboutSection />
        <Projects />
        <OriginalConcept />
      <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
