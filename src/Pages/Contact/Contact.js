// ContactUsPage.js

import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
 // Import your success image

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, like sending data to a server
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Reset submitted state after 3 seconds
  };

  return (
    <>
    <Navbar></Navbar>
    <div style={{marginTop:'100px'}}>
    <div className="contact-us-container">
      <div className="left-side">
        <img src='/images/2761902.jpg' alt="Success" />
      </div>
      <div className="right-side">
        {!submitted ? (
          <>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <p>Thank you for your message!</p>
          </div>
        )}
      </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ContactUsPage;
