import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { config } from '../config';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import Navbar from './Navbar';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

const Login = () => {
  const nav=useNavigate();
  return (
    <>
    <Navbar/>
    <div className='login-container'>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios.post(`${config.api}/user/login`, values)
            .then(response => {
              localStorage.setItem('token',response.data.token);
              localStorage.setItem('email',response.data.user.email);
              
nav("/page")
              console.log(response);
             
              // handle successful login
            })
            .catch(error => {
              console.log(error);
              // handle login error
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='login'>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
};

export default Login;
