import React from 'react'
import './About.css'
import Grad from '../../assets/Grad.jpg'

const About = () => {
  return (
    <section className="about-main" id="About">
    <div className='about'>
        <div className="about-title-wrapper">

            <h1 className="about-title">About Me</h1>
            <hr className="section-divider" />

        </div>
        
        <div className="about-sections">
            <div className="about-left">
                <img src={Grad} alt = ''/>
            </div>

            <div className="about-right">

               <div className="about-para">
  <p>Hey there! I'm a frontend developer with a heart for tech that changes lives. 
    I’ve worked with both startups and public institutions to build digital tools that actually matter.</p>
  <p>Whether it’s crafting responsive interfaces in React, managing websites,
     or mentoring others through digital skills programs — I’m all about using tech for good.</p>
</div>
<div className="about-achievements">
            <div className="achievement">
                <h3>2+</h3>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="achievement">
                <h3>3+</h3>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="achievement">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
            </div>
            
            


        
            </div>
 

        </div>


        </div>
        
        
        </div>
        </section>
  )
}

export default About