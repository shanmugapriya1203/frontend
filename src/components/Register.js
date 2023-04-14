// Signup.js (frontend)

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import register from './login.png'
import '../css/signup.css'
import Nav from "./Nav"


const Signup = () => {
  const navigate=useNavigate();

  const initialValues = {
    name:'',
    email: '',
    password: '',
    confirmPassword: ''
  };
  

  const validationSchema = Yup.object().shape({
    name:Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Required')
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await axios.post(`${config.api}/user/register`, values);
   navigate('/login')
    } catch (error) {
      setErrors({ email: error.response.data.message });
      setSubmitting(false);
    }
  };

  return (
    <>
    <Nav/>
    <div className='signup-container'>
      <h1>Sign up</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div >
              <label>Name:</label>
              <Field type="name" name="name" required />
              <ErrorMessage name="name" component="div" />
            </div>
            <div >
              <label>Email:</label>
              <Field type="email" name="email" required />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" required />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label>Confirm Password:</label>
              <Field type="password" name="confirmPassword" required />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up...' : 'Sign up'}
            </button>
          </Form>
        )}
      </Formik>
    
    </div>
    </>
  );

};

export default Signup;
