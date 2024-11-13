import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsletterRegistration from './interactive/NewsletterRegistration';
import SchoolRegister from './interactive/SchoolRegister';
import Login from './interactive/Login';
import Home from './interactive/Home';
import Destinations from './interactive/Destinations';
import AboutUs from './interactive/Aboutus';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />    
        <Route path="/newsletter" element={<NewsletterRegistration />} />   
        <Route path="/register" element={<SchoolRegister />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Destinations" element={<Destinations />} /> 
        <Route path="/Aboutus" element={<AboutUs />} /> 
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
