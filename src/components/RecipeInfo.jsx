import React from 'react';

const RecipeInfo = (props) => {
    
    const {recipe_name,cooking_method,rating} = props.rf;
    
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>{cooking_method}</p>
                        <p>{rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Favorite</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RecipeInfo;