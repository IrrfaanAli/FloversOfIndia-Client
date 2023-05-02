import React from 'react';

const HeroSection = () => {
    return (
        <div>
            {/* <div className='flex'>
                  <div className='w-1/2'>
                  <h1>hello</h1>
                  </div>
                  <div className='flex w-1/2 mr-10'>
                   <img className='w-96 h-96 mt-5' src="../../public/andy-hay-ZN-TT10kf4o-unsplash.jpg" alt="" />
                   <img className='w-80' src="../../public/shreyak-singh-0j4bisyPo3M-unsplash.jpg" alt="" />
                   <img className='w-96 h-96 mt-5' src="../../public/taylor-kiser-POFG828-GQc-unsplash.jpg" alt="" />
                  </div>
             </div> */}


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="../../public/andy-hay-ZN-TT10kf4o-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img   src="../../public/shreyak-singh-0j4bisyPo3M-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img  src="../../public/taylor-kiser-POFG828-GQc-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-32'>
                        <h1 className="text-7xl font-bold">Flavors of India.</h1>
                        <p className="py-6">Fresh ingredients, bold flavors.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;