import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';


const InfoChefs = () => {
    const info = useLoaderData();

    return (
        <>
            <div>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={info.picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='p-10'>
                            <h1 className="text-5xl text-orange-400 font-bold">{info.name}</h1>
                            <p className="py-6">{info.bio}</p>
                            
                            <p> <span className='text-xl font-bold'>Recipe</span>  : {info.number_of_recipes} Items</p>
                            <p> <span className='text-xl font-bold'>Experience </span>: {info.years_of_experience} Years</p>
                            <p><span className='text-xl font-bold'> Likes </span>: {info.likes}</p>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div>
                 
            <div className='flex-col lg:grid grid-cols-3 gap-4 lg:p-10 lg:ml-72 ml-10'>
                    {info?.recipes?.map((r) => <RecipeInfo key={r.recipe_name} rf={r}></RecipeInfo>)}
            </div>
            
            </div>

        </>
    );
};

export default InfoChefs;