import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const [error,setError] =useState('');
    const { createUser } = useContext(AuthContext);
 
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url= form.url.value;
        console.log(name,email,password,url);


        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            updateUserData(result.user,name,url);
            console.log(createUser);
        })
        .catch(error =>{
            console.log(error)
        })

        if(password.length < 6){
            setError("please provide at least 6 character in password")
        }

        const updateUserData= (user,name,url)=>{
            updateProfile(user,{
                displayName :name,
                photoURL : url

            })
            .then(()=>{
                console.log("name url updated")
            })
            .catch(error =>{
                setError(error.message)
            })
        }
        
       
    }
    return (
        <div className="form-control w-full max-w-xs mx-auto">
            <p className='text-4xl font-bold text-center mt-3'>Please Register</p>
            <form onSubmit={handleRegister}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Type here" name='name' required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text"> Email</span>
                </label>
                <input type="text" placeholder="Type here" name='email' required className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Type here" name='url' className="input input-bordered w-full max-w-xs" />

                <button type='submit' className='bg-black text-white  p-2 mt-3'>Register</button>
            </form>
          <p >Already Register? <Link to={'/login'}><span className='bg-white text-green-300 font-bold'>LogIn </span></Link></p> 
           <p className='text-red-500'>{error}</p>
        </div>

    );
};

export default Registration;