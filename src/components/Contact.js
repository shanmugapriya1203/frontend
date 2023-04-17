import React from 'react';
import '../css/contact.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or comment? Send us a message below:</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <Link to='/home'><button type="submit">Submit</button></Link>
      </form>
    </div>
    </>
  );
};

export default Contact;
