import React from 'react';
import fiveStar from '../assets/five-star.png';

export default function ReviewCards() {
  return (
    <div className="body-content center">
      <div className="card-container">
        <div className="article-card" id="left">
          <div className="content">
            {/* <div className="person">
            <img src={avatar} alt="" className="avatar" />
          </div> */}
            <div className="bio">
              <div className="name">
                <p>Melina M.</p>
                <img src={fiveStar} alt="" className="stars" />
              </div>
              <div className="text-content">
                <p>
                  {' '}
                  We have been so pleased with the attention to detail & great
                  customer service.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="background"></div>
        </div>

        <div className="article-card" id="right">
          <div className="content">
            {/* <div className="person">
            <img src={avatar} alt="" className="avatar" />
          </div> */}
            <div className="bio">
              <div className="name">
                <p>Laurel M.</p>
                <img src={fiveStar} alt="" className="stars" />
              </div>
              <div className="text-content">
                <p>
                  Colby did an excellent job, inside and out, cleaning all the
                  windows of our home and my business studio.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="background"></div>
        </div>

        <div className="article-card" id="left">
          <div className="content">
            {/* <div className="person">
            <img src={avatar} alt="" className="avatar" />
          </div> */}
            <div className="bio">
              <div className="name">
                <p>Mari B.</p>
                <img src={fiveStar} alt="" className="stars" />
              </div>
              <div className="text-content">
                <p>
                  Professional. Clear communication. Great value. My windows are
                  sparkling!!{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="background"></div>
        </div>

        <div className="article-card" id="right">
          <div className="content">
            {/* <div className="person">
            <img src={avatar} alt="" className="avatar" />
          </div> */}
            <div className="bio">
              <div className="name">
                <p>Sheila M.</p>
                <img src={fiveStar} alt="" className="stars" />
              </div>
              <div className="text-content">
                <p>Thank you Colby for doing a great job on our windows! </p>
              </div>
            </div>
          </div>
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
}
