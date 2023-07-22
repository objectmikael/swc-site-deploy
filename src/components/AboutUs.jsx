import React from 'react';
import Colby from '../assets/Headshot.jpg';
import Colin from '../assets/kitty.jpg';

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="owners">
        <div id="colby">
          <div id="image-container">
            <img src={Colby} alt="" />
          </div>
          <h3>Colby Faisst</h3>
          <h4>Title: Owner</h4>
          <p>Colby started this business and is super handsome</p>
        </div>
        <div id="colin">
          <div id="image-container">
            <img src={Colin} alt="" />
          </div>
          <h3>Colin Faisst</h3>
          <h4>Title: Owner</h4>
          <p>Colin started this business and is super handsome</p>
        </div>
      </div>
      <div className="company-bio">
        <div className="title">Our Story</div>
        <div className="bio-content">
          Colby and Colin spent their childhoods growing up in the Tahoe region
          of California. They did a myriad of physical labor jobs in
          construction and renovation and eventually found themselves cleaning
          window together. Their favorite thing about cleaning windows is
          getting to see all their client's beautiful homes and their great
          views.
        </div>
      </div>
    </div>
  );
}
