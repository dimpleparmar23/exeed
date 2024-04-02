import React, { Component } from 'react'
import "./Home.css"
// import Home1 from './Home1'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">
            FIND YOUR <br/><span>PERFECT JOB</span><br/>EASILY
          </h1>
        </header>
        <div className="welcome">
          <h2>WELCOME TO JOBHUNT</h2>
          <p>
"Explore a myriad of job opportunities tailored to your skills and preferences on our platform. From entry-level positions to executive roles, we provide diverse options across various industries. Whether you're a seasoned professional or just starting your career journey, our website offers something for everyone. Join us today and take the first step towards your dream job!"</p>
        </div>
        <div className="grid">
        <div className='card'>
          <div className="content">
          <h3>Administrative Jobs</h3>
          <p>Google: Administrative Assistant, Office Manager<br/>
                   Apple Inc.: Executive Assistant, Administrative Coordinator</p>
                   </div>

        </div>
        <div className='card'>
          <div className="content">
          <h3>Sales and Marketing Jobs</h3>
          <p>Salesforce: Sales Representative, Marketing Specialist<br/>
                 Coca-Cola: Brand Manager, Sales Executive
                  </p>
                   </div>

        </div>
        <div className='card'>
          <div className="content">
          <h3>Information Technology (IT) Jobs</h3>
          <p>Microsoft: Software Engineer, Systems Administrator<br/>
          Amazon Web Services (AWS): Cloud Architect, Solutions Architect
                  </p>
                   </div>

        </div>
        <div className='card'>
          <div className="content">
          <h3>Finance and Accounting Jobs</h3>
          <p>J.P. Morgan Chase & Co.: Financial Analyst, Accountant<br/>
          Deloitte: Audit Associate, Tax Consultant
                  </p>
                   </div>

        </div>
        </div>
        <div className="title2">
        <p> your ultimate destination for career opportunities! Discover a world of possibilities as we connect you with exciting job prospects tailored to your skills and aspirations. Whether you're a seasoned professional or just starting your career journey, JobHUNT offers a diverse range of opportunities to explore. Get ready to embark on a fulfilling career path with JobHUNT by your side. Start your search today and let us help you navigate the path to success!"</p>
        </div>
     
       
        {/* <Home1/> */}
      </div>
      
    )
  }
}


