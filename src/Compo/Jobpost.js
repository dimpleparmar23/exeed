import React, { useState, useEffect } from 'react';
import axios from './Axios';
import { Link } from 'react-router-dom';
// const baseURL = 'http://localhost:3000'

function Jobpost() {
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
      <h1>Company Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </label>
        <label>
          Company Description:
          <input type="text" name="companyDescription" value={formData.companyDescription} onChange={handleChange} required />
        </label>
        <label> 
          CTC:
          <input type="text" name="ctc" value={formData.ctc} onChange={handleChange} required />
        </label>
        <label>
          Eligibility Criteria:
          <input type="text" name="eligibilityCriteria" value={formData.eligibilityCriteria} onChange={handleChange} required />
        </label>
        <label>
          Registration Time:
          <input type="text" name="registrationTime" value={formData.registrationTime} onChange={handleChange} required />
        </label>
        <button>Register</button>
      </form>
      <h2>Registered Companies</h2>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <p>Name: {item.companyName}</p>
            <p>Description: {item.companyDescription}</p>
            <p>CTC: {item.ctc}</p>
            <p>Eligibility Criteria: {item.eligibilityCriteria}</p>
            <p>Registration Time: {item.registrationTime}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default Jobpost;