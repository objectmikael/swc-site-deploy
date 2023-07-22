import React from 'react';
import { Link } from 'react-router-dom';

export default function QuoteBtn() {
  return (
    <button id="quote-btn">
      <Link to="/get-a-quote">Get A Quote</Link>
    </button>
  );
}
