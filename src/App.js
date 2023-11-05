import React from 'react';
import Home from './Routes/Home/Home';
import Navbar from './Routes/Navbar/Navbar';
import About from './Routes/About/About';
import Services from './Routes/Services/Services';
import Gallery from './Routes/Gallery/Gallery';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='services' element={<Services/>} />
        <Route path='gallery' element={<Gallery/>} />
      </Route>
    </Routes>
  );
}

export default App;
