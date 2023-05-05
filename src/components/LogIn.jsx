import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config'
import { FirebaseError } from 'firebase/app';

const LogIn = () => {

    const { user } = useContext(AuthContext);
    const [err,setErr] = useState('');
    
    
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
            .catch(error=> {
            setErr(error.message);
            })
         
        
          
    }
    const handleGoolgeSignIn = () =>{
        signInWithPopup(auth,GoogleProvider)
        .then(result => {
            const loggedUser = result.user;
            navigate('/'); 
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,GithubProvider)
        .then(result => {
            const loggedUser = result.user;
            navigate('/'); 
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
   
    return (
        <div>
            <div className="form-control w-full max-w-xs mx-auto my-auto mt-12">
            <p className='text-4xl font-bold text-center mt-3'>Please Login</p>
                <form onSubmit={handleLogIn}>
                <p className='text-red-500'>{err}</p>
                    <label className="label">
                        <span className="label-text"> Email</span>
                    </label>
                    <input type="text" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className='bg-orange-500 text-white p-2 rounded my-2'>LogIn</button>
                </form>
                <button className='bg-green-300 text-black p-2 rounded my-1' onClick={handleGoolgeSignIn}>Google </button>
                <button className='bg-orange-400 text-white p-2 rounded my-1'onClick={handleGithubSignIn}>Github </button>
                
                <p > Donot have Account? <Link to={'/register'}><span className='bg-white text-green-300 font-bold '>Register </span></Link></p> 
                
            </div>
            
              
        </div>
    );
};

export default LogIn;