import React from 'react';
import '../css/about.css'
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a fitness tracker website dedicated to helping you achieve your health and fitness goals. Our website offers a variety of features to help you stay on track and reach your full potential.</p>
    </div>
    </>
  );
};

export default About;
