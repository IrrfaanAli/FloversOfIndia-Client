import React from 'react';

const Card = (props) => {
    // [name,picture_url,years_of_experience,number_of_recipes,likes,id]
    const { name,picture_url,years_of_experience,number_of_recipes,likes,id } = props.chefs;
    

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
                    <p>{likes}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;