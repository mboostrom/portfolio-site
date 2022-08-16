import React from "react"
import AboutSection from "./AboutSection"
import Projects from "./Projects"
import OriginalConcept from "./OriginalConcept"
import Footer from "./Footer"
import Contact from "./Contact"

const HomePage = (props) => {
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <p className="hello">hello.</p>
          <p className="header-p">
            I am highly motivated and skilled in web development. I am fluent in JavaScript, React,
            Node.js, HTML5, and CSS3.
          </p>
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
      </div>
      <AboutSection />
      <div className="home-page">
        <Projects />
      </div>
      <OriginalConcept />
      <Footer />
    </div>
  )
}

export default HomePage
