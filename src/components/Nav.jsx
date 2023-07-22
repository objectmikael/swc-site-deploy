import React from 'react';
import { Link } from 'react-router-dom';
import QuoteBtn from './QuoteBtn';

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/services">Services</Link>

      <Link to="/about-us">About Us</Link>

      <Link to="/contact">Contact</Link>

      <QuoteBtn />
    </div>
  );
}
