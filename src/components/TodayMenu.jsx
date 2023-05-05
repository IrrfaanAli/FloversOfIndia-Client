import React from 'react';

const TodayMenu = () => {
    return (
        <div className='bg-slate-50'>
            <h1 className='text-2xl font-bold ml-5 mt-5' >Today's Menu</h1>

            <div className=' flex-col lg:grid grid-cols-3 gap-4 container  mx-20 lg:mx-72'>
                <div className='w-72 p-5'>
                    <p className='text-2xl ml-16 mb-3'>Pakodas</p>
                    <img className='w-40 mx-auto' src="Onion-Pakodas-2.jpg" alt="" />
                    <p className='mx-auto'>The famous snack acts as a catalyst to rejuvenate every Indian’s mood on a beautiful monsoon evening.</p>

                </div>
                <div className='w-72 p-5 '>
                    <p className='text-2xl ml-16 mb-3'>Pulihora</p>
                    <img className='w-40 mx-auto' src="pulihora.jpg" alt="" />
                    <p className='mx-auto'>Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka.</p>

                </div>
                <div className='w-72  p-5'>
                    <p className='text-2xl ml-16 mb-3'>Masala dosa</p>
                    <img className='w-40 mx-auto' src="Dosha.jpg" alt="" />
                    <p className='mx-auto'>A traditional southern Indian dish known as masala dosa is popular throughout the country</p>

                </div>
                <div className='w-72 p-5'>
                    <p className='text-2xl ml-16 mb-3'>Rogan josh</p>
                    <img className='w-40 mx-auto' src="josh.jpg" alt="" />
                    <p className='mx-auto'>Rogan josh is an aromatic lamb curry that is believed to be of Persian origin, although today it is more closely associated with the Kashmir region of India. </p>

                </div>
                <div className='w-72  p-5 '>
                    <p  className='text-2xl ml-16 mb-3'>Malai</p>
                    <img className='w-40 mx-auto' src="malai.jpg" alt="" />
                    <p className='mx-auto'>The thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until a thick layer of fat is created on top.</p>

                </div>
                <div className='w-72  p-5'>
                    <p className='text-2xl ml-16 mb-3'>Pav bhaji</p>
                    <img className='w-40 mx-auto' src="bhaji.jpg" alt="" />
                    <p className='mx-auto'>Pav bhaji is a popular street snack originating from the Indian state of Maharashtra.</p>

                </div>
                
            </div>
        </div>
    );
};

export default TodayMenu;