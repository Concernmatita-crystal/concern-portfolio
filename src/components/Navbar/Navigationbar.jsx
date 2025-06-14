import React from 'react'
import './Navigationbar.css'
/*import logo from '../../assets/logo.PNG'
<img src={logo} alt="logo" className='logo' />*/

const Navigationbar = () => {
  return (
    <div className='navbar'>
        
        <ul className="nav-menu">
            <li><a href="#Home"className="active">Home</a></li>
            <li><a href="#About">About </a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>

      
    </div>
  )
}

export default Navigationbar