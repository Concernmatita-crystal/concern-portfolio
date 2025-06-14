import React from 'react'
import './Hero.css'
import portfolio from '../../assets/portfolio.png'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
   <div className="hero" id="Home">
    <div className="hero-image-container">
    <img src={portfolio} alt="Concern Matita" className="hero-image"/>
    </div>


    <h1> Hello, I'm<span className='hero-name'> Concern Matita</span><br />
    
     <span className='hero-role'>

      <Typewriter
      options={{
        strings: ['Frontend Developer', 'Software Developer', 'Data Scientist', 'Web Developer'],
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 40,
        pauseFor: 2500,
      }}
    />



     </span>
     
     </h1>
    <p className='hero-para'> I craft beautiful and functional applications that solve real world problems.</p>

    <div className="hero-action">
    <div className="hero-connect"> Connect with me</div>
    <div className="hero-resume"><a href="/GeneralCV.pdf" download className="download-btn">My Resume</a>
</div>
    </div>
   </div>
  )
}

export default Hero