import React, { useState } from 'react';
import './About.css'
import Grad from '../../assets/Grad.jpg'


const About = () => {
     const [showMore, setShowMore] = useState(false);
  return (
    <section className="about-main" id="About">
    <div className='about'>
        <div className="about-title-wrapper">

            <h1 className="about-title">About Me</h1>
           

        </div>
        
        <div className="about-sections">
            <div className="about-left">
                <div className="circle-shape"></div>
              
             <img src={Grad} alt = ''/>
            </div>

            <div className="about-right">

               <div className="about-para">
                <h3 className='about-header'> Who I am</h3>



    <p> I'm a frontend developer and ICT professional with a heart for tech that changes lives. 
  Over the past couple of years, I’ve worked with both startups and public institutions to build digital tools that actually matter — 
  from websites for government services to innovative platforms for social good.<br /><br />
   In my current role at Malawi Post Corporation, I’ve been hands-on with everything from website management to 
   troubleshooting complex IT issues, 
   making sure systems run smoothly for thousands of users.
  </p>
  {showMore && (
    <p>Whether it’s crafting responsive interfaces in React, managing websites,
       or mentoring others through digital skills programs — I’m all about using tech for good.</p>



  )}
  <button onClick={() => setShowMore(!showMore)} className="see-more-btn">
    {showMore ? "See Less" : "See More"}
  </button>
</div>
{/* <div className="about-achievements">
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
            
            


        
            </div> */}
 

        </div>


        </div>
        
        
        </div>
        </section>
  )
}

export default About