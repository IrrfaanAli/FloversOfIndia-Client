import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config'

const LogIn = () => {
    
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const { userlogin } = useContext(AuthContext);
    const  navigate = useNavigate();
    const handleLogIn = event => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        

        userlogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                 navigate('/');             
            })
            .catch(err=> {
             console.log(err)
            })
         
        
          
    }
    const handleGoolgeSignIn = () =>{
        signInWithPopup(auth,GoogleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,GithubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <form onSubmit={handleLogIn}>
                    <label className="label">
                        <span className="label-text"> Email</span>
                    </label>
                    <input type="text" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className='bg-black text-white mt-3'>LogIn</button>
                </form>
                <button onClick={handleGoolgeSignIn}>Google </button>
                <button onClick={handleGithubSignIn}>Github </button>
                
                <Link to={'/register'}>Register</Link>
            </div>
            
        </div>
    );
};

export default LogIn;