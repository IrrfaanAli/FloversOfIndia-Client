import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {chef_id,picture_url,name,years_of_experience,number_of_recipes,like } = props.chefs;
    

    return (
        <div>

            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{years_of_experience}</p>
                    <p>{number_of_recipes}</p>
                    <p>{like}</p>
                    <div className="card-actions">
                     <Link to={`/chef/${chef_id}`}>  <button className="btn btn-primary">View Recipes</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;