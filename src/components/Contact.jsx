import React from 'react';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import QuoteBtn from './QuoteBtn';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-methods">
        <div id="phone">
          <img src={phone} alt="" />
          <h3>Phone</h3>
          <h4>The fastest way to get a hold of us!</h4>
          <h3>(541) 555-7300</h3>
        </div>
        <div id="email">
          <img src={email} alt="" />
          <h3>Email</h3>
          <h4>
            Get all your questions answered and get your estimate scheduled.
          </h4>
          <h3>info@sierra-window-cleaning.com</h3>
        </div>
      </div>
      <div className="reach-out">
        <div className="title">Want us to reach out to you instead?</div>
        <QuoteBtn />
      </div>
    </div>
  );
}
