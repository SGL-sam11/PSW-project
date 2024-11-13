import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// import Hidrokarbon from './components/Hidrokarbon';
// import termokimia from './components/termokimia';
// import reaksi from './components/reaksi';
// import kesetimabangan from './components/kesetimabangan';
// import asambasa from './components/asambasa';
// import hidrolosis from './components/hidrolosis';
// import penyangga from './components/penyangga';
// import kelarutan from './components/kelarutan';
// import koloid from './components/koloid';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />    
        
        <Route path="/Home" element={<Home />} />
       
        {/* <Route path="/Aboutus" element={<AboutUs />} />  */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
