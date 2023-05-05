import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';

const Card = (props) => {
    const { chef_id, picture_url, name, years_of_experience, number_of_recipes, likes } = props.chefs;


    return (
        <div>

            <div className="card w-96  bg-base-100 shadow-xl h-96 p-18 ">
                <figure className="px-10 pt-10">
                    <LazyLoad>
                    <img src={picture_url} alt="Shoes" className="rounded-xl p-10" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p> Experience : {years_of_experience} Years</p>
                    <p > Recipe : {number_of_recipes} Items</p>
                    <p className='flex gap-1'> <HiHeart></HiHeart>{likes} Likes</p>
                    <div className="card-actions">
                        <Link to={`/chef/${chef_id}`}>  <button className="btn bg-slate-300 text-black hover:text-white">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;