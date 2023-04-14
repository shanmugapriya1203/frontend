import React from 'react';

import '../css/navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">fitnessZone</a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Link to='/login'>
      <button className="login-button">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
