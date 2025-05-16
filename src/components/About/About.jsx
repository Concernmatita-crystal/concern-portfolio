import React from 'react'
import './About.css'
import Grad from '../../assets/Grad.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">

            <h1>About Me</h1>

            

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Grad} alt = ''/>
            </div>

            <div className="about-right">

                <div className="about-para">
                    <p> Iam an experienced Frontend developer with over 2 years of experience</p>
                    <p> I design, develop, and deliver user-focused solutions that make a difference. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p> HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p> React JS</p><hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p> JavaScript</p><hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p> NextJS</p><hr style={{width:"50%"}}/></div>
                        
                    
                </div>

        
            </div>




        </div>
        
        
        
        </div>
  )
}

export default About