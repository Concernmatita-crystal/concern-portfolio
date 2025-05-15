import React from 'react'
import './Navigationbar.css'
import logo from '../../assets/logo.PNG'

const Navigationbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Certifications</li>
            <li>Contact</li>
        </ul>

       


       
        <div className="nav-connect">
            Connect With Me
        </div>

    </div>
  )
}

export default Navigationbar