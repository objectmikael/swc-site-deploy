import React from 'react';
import Carousel from './Carousel';
import ReviewCards from './ReviewCards';
import Guarantee from './Guarantee';

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <ReviewCards />
      <Guarantee />
      {/* Start Here. Add JSX then add CSS rule-by rule */}
    </div>
  );
}
