import React from 'react';
import Scrub from '../assets/scrub.jpg';
import Gutters from '../assets/gutter-cleaning.jpg';
import Pressure from '../assets/pressure-washing.jpg';
import QuoteBtn from './QuoteBtn';
import Guarantee from './Guarantee';

export default function Services() {
  return (
    <div className="services">
      <div className="service-cards">
        <div id="window-cleaning">
          <div id="image-container">
            <img src={Scrub} alt="" />
          </div>
          <h3>Window Cleaning</h3>
          <h4>Make your windows look new</h4>
          <p>
            Whether it's residential, commercial or new construciton, we have
            the know how to make your windows sparkle.
          </p>
          <QuoteBtn />
        </div>
        <div id="gutter-cleaning">
          <div id="image-container">
            <img src={Gutters} alt="" />
          </div>
          <h3>Gutter Cleaning</h3>
          <h4>Unclog those dirty downspouts</h4>
          <p>
            Neglecting to clean your gutters can lead to many downstream
            problems. Let us handle it for you!
          </p>
          <QuoteBtn />
        </div>
        <div id="pressure-washing">
          <div id="image-container">
            <img src={Pressure} alt="" />
          </div>
          <h3>Pressure Washing</h3>
          <h4>Homes, Driveways, Commercial</h4>
          <p>
            Our attention to detail is what sets our pressure washing services
            apart.
          </p>
          <QuoteBtn />
        </div>
      </div>
      <div>
        <Guarantee />
      </div>
    </div>
  );
}
