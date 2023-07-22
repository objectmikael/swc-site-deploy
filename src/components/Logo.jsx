import React from 'react';
import { Link } from 'react-router-dom';
import horzlogo from '../assets/swc_horz_logo.png';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={horzlogo} alt="logo" />
      </Link>
    </div>
  );
}
