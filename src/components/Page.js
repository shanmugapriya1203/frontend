import React, { useState } from 'react';
import axios from 'axios';
import '../css/page.css'
import Nav from "./Nav"
import { config } from '../config';

const FitnessActivityForm = ({ user }) => {
  const [formData, setFormData] = useState({
    date: '',
    exerciseType: '',
    duration: '',
    distance: '',
    notes: '',
  });

  const { date, exerciseType, duration, distance, notes } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error('No user ID provided');
      }
      const response = await axios.post(`${config.api}/fit/fitnessActivity`, {
        user,
        date,
        exerciseType,
        duration,
        distance,
        notes,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error saving fitness activity data.');
    }
  };

  return (
    <>
      <Nav />
      <form className="fitness-activity-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
          required
        />
        <label htmlFor="exerciseType">Exercise Type:</label>
        <input
          type="text"
          name="exerciseType"
          value={exerciseType}
          onChange={handleChange}
          required
        />
        <label htmlFor="duration">Duration (in minutes):</label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={handleChange}
          required
        />
        <label htmlFor="distance">Distance (in miles):</label>
        <input
          type="number"
          name="distance"
          value={distance}
          onChange={handleChange}
        />
        <label htmlFor="notes">Notes:</label>
        <textarea name="notes" value={notes} onChange={handleChange}></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default FitnessActivityForm;
