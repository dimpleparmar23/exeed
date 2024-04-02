// import React from 'react'

// function R() {
//   return (
//     <div>
//        <h2>Registered Companies</h2>
//       <ul>
//         {data.map(item => (
//           <li key={item._id}>
//             <p>Name: {item.companyName}</p>
//             <p>Description: {item.companyDescription}</p>
//             <p>CTC: {item.ctc}</p>
//             <p>Eligibility Criteria: {item.eligibilityCriteria}</p>
//             <p>Registration Time: {item.registrationTime}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default R




import React, { Component } from 'react'
import "./Job1.css"


export class Job1 extends Component {
  
  render() {
    return (
     <div className='container'>
      
      <div className="box-container">
        {/* job 1 info */}
        <div className="box1">
        <div className="box">
          {/* company'logo */}
        
          <img src='/image.png' height="250px" width="250px" alt="img-1"></img>
          
          
        </div>
        <div className="info">
          <h3><b>Gradute Engineer Trainee</b></h3>
          {/* company name */}
          <h4>STEMpedia pvt.Ltd</h4>
          {/* job type */}
          <p><b>Job Type</b></p>
          <p>Intern + Full Time</p><div className="btn1">
         <a href="/Jobinfo/Job.1.html" className="btn">View More</a> 
         </div>
        </div>
        </div>
        {/* job 2 info */}
        <div className="box1">
        <div className="box">
          {/* company'logo */}
          <img src='/IndiGo-Logo.png' height="250px" width="250px" alt="img-1"></img>      
        </div>
        <div className="info">
          <h3><b> Enineer Trainee </b></h3>
          {/* company name */}
          <h4>Indigo Airliness</h4>
          {/* job type */}
          <p>Job Type</p>
          <p><b> Full Time</b></p><div className="btn1"> 
         <a href="/Jobinfo/Job.2.html" className="btn">View More</a> 
         </div>
        </div>
        </div>
        {/* job 3 info */}
        <div className="box1">
        <div className="box">
          {/* company'logo */}
          <img src='/Maxicus Battle Card.png' height="250px" width="250px" alt="img-1"></img>
          
        </div>
        <div className="info">
          <h3><b>Sales process</b></h3>
          {/* company name */}
          <h4>Maxicus</h4>
          {/* job type */}
          <p>Job Type</p>
          <p><b> Full Time</b></p><div className="btn1">
         <a href="/Jobinfo/Job.3.html" className="btn">View More</a> 
         </div>
        </div>
        </div>
         {/* job 4 info */}
         <div className="box1">
         <div className="box">
          {/* company'logo */}
          <img src='/images.png' height="250px" width="250px" alt="img-1"></img>
          
        </div>
        <div className="info">
          <h3><b>Product Data Analyst</b></h3>
          {/* company name */}
          <h4>Comline Group</h4>
          {/* job type */}
          <p>Job Type</p>
          <p><b> Full Time</b></p><div className="btn1">
         <a href="/Jobinfo/Job.4.html" className="btn">View More</a> 
         </div>
        </div>
        </div>
        {/* job 5 info */}
        <div className="box1">
        <div className="box">
          {/* company'logo */}
          <img src='/mg.png' height="250px" width="250px" alt="img-1"></img>
          
        </div>
        <div className="info">
          <h3><b>Gradute Engineer Trainee</b></h3>
          {/* company name */}
          <h4>MG Motor India</h4>
          {/* job type */}
          <p>Job Type</p>
          <p><b> Full Time</b></p><div className="btn1">
         <a href="/Jobinfo/Job.5.html" className="btn">View More</a> 
         </div>
        </div>
        </div>

        {/* job info 6 */}
        <div className="box1">
        <div className="box">
          {/* company'logo */}
          <div className="image">
          <img src="./src/Images/6.png" alt="img-6"></img>
          </div>
          
        </div>
        <div className="info">
          <h3><b>React JS Developers</b></h3>
          {/* company name */}
          <h4>Neenopal</h4>
          {/* job type */}
          <p>Job Type</p>
          <p><b> Full Time + Internship</b></p><div className="btn1">
         <a href="/Jobinfo/Job.6.html" className="btn">View More</a> 
         </div>
        </div>
        </div>

      </div>

     </div>
    )
  }
}

export default Job1




