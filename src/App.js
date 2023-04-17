import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Register';
import Page from './components/Page';
import FitnessActivityTable from './components/Table'
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/table' element={<FitnessActivityTable/>}/>
        <Route path='*' element={<NotFound/>}/>
       
        </Routes>
  );
}

export default App;
