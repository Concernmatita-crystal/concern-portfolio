import React from 'react'
import './Hero.css'
import profile_img from '../../assets/portfolio.png'

const Hero = () => {
  return (
   <div className="hero">
    <img src={profile_img} alt=""/>

    <h1> <span>I'm Concern Matita,</span> frontend developer</h1>
    <p> I am a frontend developer from Blantyre, Malawi with 3 years of work experience</p>

    <div className="hero-action"></div>
    <div className="hero-connect"> Connect with me</div>
    <div className="hero-resume">My Resume</div>

   </div>
  )
}

export default Hero