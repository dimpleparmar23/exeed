import React from 'react'
import Navbar from './Navbar'
import "./Contact.css"

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="contact-info">
    <h3>Contact Information</h3>
    <p><strong>Address:</strong> 123 Main St, City, Country</p>
    <p><strong>Phone:</strong> +1 234-567-8901</p>
    <p><strong>Email:</strong> info@jobhunt.com</p>
</div>

    </>
  )
}

export default Contact
