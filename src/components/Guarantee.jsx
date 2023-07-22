import React from 'react';
import guarantee from '../assets/guarantee.png';

export default function Guarantee() {
  return (
    <div className="guarantee">
      <div className="container">
        <img src={guarantee} />
        <div className="guarantee-content">
          <h2>Our Promise to You</h2>
          <p>
            We promise sparkling clean windows that shine with clarity. If
            you're not completely satisfied with our window cleaning service,
            we'll promptly return and re-clean any areas to your satisfaction.
            Your happiness is our priority, and we strive for flawless results
            every time. Customer satisfaction is guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}
