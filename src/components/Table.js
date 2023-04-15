import React from 'react';
import '../css/table.css'
import Nav from "./Nav"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { config } from '../config';

const FitnessActivityTable = () => {
    const email=localStorage.getItem('email')
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`${config.api}/fit/getfitnessActivity/${email}`).then(response=>{
            setData(response.data)
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <>
 <Nav/>
 <h1>Activity</h1>
    <table className="fitness-activity-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Exercise Type</th>
          <th>Duration</th>
          <th>Distance</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
    {
        data.map((e)=>{
            return(
                
                <tr>
                <td>{e.date}</td>
                <td>{e.exerciseType}</td>
                <td>{e.duration}</td>
                <td>{e.distance}</td>
                <td>{e.notes}</td>

                </tr>
            )
        })
    }
      </tbody>
    </table>
    </>
  );
};

export default FitnessActivityTable;
