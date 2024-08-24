import React from 'react'
import './About.css'
import Img from '../../assets/about-bg.jpg'
function About() {
  return (
    <>

      <div className="about">
        <div className="about-image">
          <h1 className="about-title">About Us</h1>
      </div>
      <div className="about-details">
        <div className='about-background'>
            <p className="about-text"> Welcome to The Tezos Community, a platform where like-minded individuals come together to share ideas, learn and grow together. We are a community of developers, designers, artists, and enthusiasts who share a common interest in the Tezos ecosystem.
              We believe in the power of collaboration and the importance of community in building a better future for all. Our mission is to create a platform where people can come together, share their ideas and projects,
              and support one another in their journey. We aim to provide a safe
              and inclusive environment for all members of our community, regardless of their background or level of experience. We believe that everyone has something valuable to offer, and we strive to create an environment where everyone
              feels welcome and valued. If you share our vision and want to be a part of our community, please join us and let's build a better future together.
            </p>
            <div className="about-img">
                <img src={Img} alt="About Us" className="about-image" />
            </div>
        </div>
          <div className="about-section">
            <h2 className="about-subtitle">Our Vision</h2>
            <p className="sec-text">
              We envision a future where everyone has the opportunity to reach their full potential, regardless of their background or circumstances. We believe that by working together, we can create a better world for all.
            </p>

            <h2 className="about-subtitle">Our Mission</h2>
            <p className="sec-text">
              Our mission is to create a platform where people can come together, share their ideas and projects, and support one another in their journey. We aim to provide a safe and inclusive environment for all members of our community, regardless of their background or level of experience.
            </p>
          </div>

        </div>

      </div>


    </>
  )
}

export default About

