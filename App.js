import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contacts from './pages/Contacts'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() { 
  return (
    <Router> 
      <div className='wrapper'>
    <Header/>
      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/booking" element={<Booking />} />
          <Route path="/contacts" element={<Contacts />} />                                                                                          
        </Routes>
      </div>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
