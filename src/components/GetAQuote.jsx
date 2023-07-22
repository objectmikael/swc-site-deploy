import React from 'react';

export default function Quote() {
  return (
    <div className="quote">
      <div className="quote-text">
        <h2>Let us know how to get in touch with you!</h2>
        <br />
        <h4>We will promptly reach out to schedule an estimate with you.</h4>
        <br />
      </div>
      <div className="quote-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />

        <button id="quote-btn">Submit</button>
      </div>
    </div>
  );
}
