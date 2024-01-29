import React from 'react';
import NavaBar from './components/NavaBar';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';
import Gallery from './views/Gallery';
import Request from './components/Request';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router>
    <div className="overflow-hidden">
      <NavaBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/request' element={<Request/>}/>
      </Routes>
    </div>
    </Router> 
  );
}

export default App;
