import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Home from './Home';
import GetAQuote from './GetAQuote';

export default function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
      </Routes>
    </div>
  );
}
