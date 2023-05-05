import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const RecipeInfo = (props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const {recipe_name,cooking_method,rating,ingredients} = props.rf;
    
    const notify = () =>{
    toast("Added To Your Favorite");
    setIsButtonDisabled(true);
  }
    return (
        <div >
            <div className="card w-96 h-auto bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>{cooking_method}</p>
                        <p>Rating : {rating}</p>
                        <p className='text-xl font-bold'>Ingredient</p>
                        <p>{ingredients?.map((data)=> <p>{data}</p>)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={notify} disabled={isButtonDisabled}>Favorite</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RecipeInfo;