import React from 'react';

const HelloSection = () => {
    return (
        <div className='bg-slate-50'>
             <p className='mt-3 text-2xl font-bold'>Welcome to  Flavors of India!</p>
            <div className='flex p-12  '>
                <div className='w-2/5' > Our restaurant is dedicated to bringing you the most authentic and flavorful dishes from all corners of India. Our team of talented chefs is passionate about creating dishes that not only taste amazing but also showcase the rich and diverse culture of India.

                    We use only the freshest ingredients and traditional cooking techniques to create our dishes, ensuring that every bite is a delicious journey through the various regions of India. Whether you're looking for spicy curries, savory biryanis, or crispy dosas, we have something for everyone.

                    Our goal is to provide you with an unforgettable dining experience, where you can savor the true flavors of India in a warm and inviting atmosphere. So sit back, relax, and let us take you on a culinary adventure through the vibrant and diverse cuisine of India. Thank you for choosing Flavors of India, we are delighted to have you as our guest.</div>
                <div className='flex gap-4 '>

                     <img className='h-96' src="tyler-nix-KhTHp3OOBts-unsplash.jpg" alt="" />
                     <img className='h-96' src="sean-bernstein-ACVu-cqSmw4-unsplash.jpg" alt="" />
                     <img className='h-96' src="victoria-shes-UC0HZdUitWY-unsplash.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default HelloSection;