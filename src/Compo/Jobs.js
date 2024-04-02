import React from 'react';
import Navbar from './Navbar';
import './Jobs.css';
// import Job1 from './Job1'
// import Jobnav from './Jobnav'
import axios from './Axios'
import { useState,useEffect } from 'react';
export default function Jobs() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    ctc: '',
    eligibilityCriteria: '',
    registrationTime: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/Jobpost');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/Jobpost', formData);
      setFormData({
        companyName: '',
        companyDescription: '',
        ctc: '',
        eligibilityCriteria: '',
        registrationTime: '',
      });
      fetchData();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="img">
        <h1 className="info">
          FIND YOUR <br />
          <span>OPPORTUNITIES</span>
        </h1>
      </div>
      <div className="search">
        <input className="search-input" type="text" placeholder="Job title, Company-Name" />
        <button className="btn">SEARCH</button>
      </div>
      {/* <div className="gridview">
        <div className="company-card">
          <img src="./ebay.png" alt="Company Logo" />
          <h3>
            Ebay
            <br />
            Business Development
          </h3>
        </div>
        <div className="company-card">
          <img src="./tesla.png" alt="Company Logo" />
          <h3>
            Tesla
            <br />
            Mechanical Engineer
          </h3>
        </div>
        <div className="company-card">
          <img src="./Amazon-Logo.png" height="100px" width="100px" alt="Company Logo" />
          <h3>
            Amazon
            <br />
            Software Engineer
          </h3>
        </div>
      </div> */}
      {/* <Jobnav/> */}
      {/* <Job1/> */}
      <div className="registered-companies">
      <h2>Registered Companies</h2>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <p>Name: {item.companyName}</p>
            <p>Description: {item.companyDescription}</p>
            <p className="ctc">CTC: {item.ctc}</p>
            <p className="criteria">Eligibility Criteria: {item.eligibilityCriteria}</p>
            <p className="registration-time">Registration Time: {item.registrationTime}</p>
          </li>
        ))}
      </ul>
     
    </div>
    </div>
  );
}
