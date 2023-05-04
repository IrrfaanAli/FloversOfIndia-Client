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
                        <div>
                            <h1 className="text-5xl font-bold">{info.name}</h1>
                            <p className="py-6">{info.bio}</p>
                            <p>{info.likes}</p>
                            <p>{info.number_of_recipes}</p>
                            <p>{info.years_of_experience}</p>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div>
                 
            <div className='flex  gap-4 p-10'>
                    {info.recipes.map((r) => <RecipeInfo key={r.recipe_name} rf={r}></RecipeInfo>)}
            </div>
            
            </div>

        </>
    );
};

export default InfoChefs;