import React from 'react'
import Navbar from './Navbar'
import '../css/home.css'
import Tracker from './home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
   
      <>
      <Navbar/>
      {/* Title section */}
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="text">Best Way <br></br><span className='title-half'>for Your Fitness Activity Track</span></h1>

<h3>Easiest way to track your fitness Activity
  <br></br>
  with Fitrack,get your  accurate data to
  
  achieve next level of yours.
</h3>
<button className="large-btn">Get Started</button>
       
        </div>
        <div className="col-lg-6 order-lg-2">
          <img
            src={Tracker}
            className="title-img"
            alt="tracker svg"
          />
        </div>
      </div>
      </div>
   
      </>
    
   
  )
}
