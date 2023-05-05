import React, { useContext } from 'react';

import ActiveLink from './ActiveLink';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Header = () => {

     const{user,logout} = useContext(AuthContext);
     console.log(user);

     const handleLogOut  = () =>{
        logout()
        .then()
        .catch(error =>{
            console.log(error);
        })
     }
    

    return (
        <div>
            <div className="navbar  bg-slate-300 p-5  flex-col lg:flex-row">
                <div className=" lg:flex-1">
                    <a className="btn btn-ghost normal-case text-4xl font-bold">Flavors of India.</a>
                </div>
                <div className=" lg:flex-none gap-2">
                <div className="form-control">
                <ActiveLink to={'/'}><button className='text-xl font-semibold'>Home</button></ActiveLink> 
                </div>
                <div className="form-control  mx-10">
                    <ActiveLink to={'/blog'}><button className='text-xl font-semibold'>Blog</button></ActiveLink>  
                </div>
                 <button></button>
                <div className="form-control mr-5">
                        <button className='text-xl font-semibold'></button>
                </div>
  
                    <div>
                        {user ? <div className='flex gap-2'> <div> <img  className='rounded-full w-12 h-12 ' src={user.photoURL} alt="" />
                        </div><button onClick={handleLogOut} className='bg-orange-500 text-white p-2 rounded'>LogOut</button></div> : 
                        <Link to={'/login'}><button className='bg-orange-500 text-white p-2 rounded'>LogIn</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;