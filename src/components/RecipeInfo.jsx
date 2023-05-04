import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const RecipeInfo = (props) => {
    const {active, setActive} = useState(true);

    const {recipe_name,cooking_method,rating} = props.rf;
    const notify = () =>{
    toast("Added To Your Favorite");
      setActive(false);
  }
    return (
        <div >
            <div className="card w-96 h-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>{cooking_method}</p>
                        <p>Rating : {rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={notify} disabled ={active}>Favorite</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RecipeInfo;