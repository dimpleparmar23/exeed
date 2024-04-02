import React, { Component } from 'react'
import Navbar from './Navbar'
import "./About.css"

export default class About extends Component {
  render() {
    return (
     <>
     <Navbar/>
     <div className="container">
     <div className="image">
     <img src="/mission.png" alt="image"></img>
     </div>
     <div className="text">
      <p>At JOBHUNT, our mission is to empower individuals in their career journey by providing a comprehensive platform that connects them with meaningful employment opportunities tailored to their skills and aspirations. We strive to bridge the gap between job seekers and employers, facilitating mutual success and growth.</p>

     </div>
    </div>
    <div className="container">
     <div className="image">
     <img src="/story.png" alt="image"></img>
     </div>
     <div className="text">
      <p>JOBHUNT was born out of a passion for helping individuals find their dream careers. It all started with a simple idea: to create a platform that simplifies the job search process and empowers both job seekers and employers. From humble beginnings to a thriving community, our journey has been filled with challenges, growth, and countless success stories.</p>

     </div>
    </div>
    <div className="container">
     <div className="image">
     <img src="/team.png" alt="image"></img>
     </div>
     <div className="text">
      <p>Meet the dedicated individuals behind JOBHUNT. From our visionary founders to our talented developers and customer support team, each member brings unique skills and expertise to the table. Together, we're committed to revolutionizing the way people find and secure employment opportunities.</p>

     </div>
    </div>
    </>
    )
  }
}
