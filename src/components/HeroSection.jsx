import React from 'react';

const HeroSection = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("/taylor-kiser-POFG828-GQc-unsplash.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Flavors of India.</h1>
      <p className="mb-5 text-xl">Fresh ingredients, bold flavors.</p>
      
    </div>
  </div>
</div>
    );
};

export default HeroSection;