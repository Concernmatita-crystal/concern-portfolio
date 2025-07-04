import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import portfolio from '../../assets/portfolio.png';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <div className="hero-content">
        
        <div className="hero-left">
          <h1>
            Hello, I'm
            <span className="hero-name"> Concern Matita</span>
            <br />
            <span className="hero-role">
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Software Developer',
                    'Data Scientist',
                    'Web Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 40,
                  pauseFor: 2500,
                }}
              />
            </span>
          </h1>
          <p className="hero-para">
            I craft beautiful and functional applications that solve real-world
            problems.
          </p>

          <div className="hero-icons">
           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:youremail@example.com">
           <FaEnvelope />
          </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">
              <a href="/GeneralCV.pdf" download className="download-btn">
                My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-right">
          <div class="hero-image-wrapper">
          <img
            src={portfolio}
            alt="Concern Matita"
            className="hero-image"
          />

        <div class="hero-shapes">
        <div class="shape-rectangle"></div>
        <div class="shape-rectangle second"></div>
        </div>


          <div class="hero-status">

       <div class="status-indicator"></div>
       <span>Currently working on my <strong>Portfolio</strong></span>
</div>

        </div>
      </div>
      </div>
  <div class="hero-quote">
  <p class="quote-text">
    <span class="quote-mark">“</span> With great power comes great electricity bill <span class="quote-mark">”</span>
   </p>
   <p class="quote-author">- Dr. Who</p>
  </div>

    </section>
  );
};

export default Hero;
