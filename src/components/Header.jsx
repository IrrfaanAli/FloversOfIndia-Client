import React from 'react';

import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-slate-300 p-5">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-4xl font-bold">Flavors of India.</a>
                </div>
                <div className="flex-none gap-2">
                <div className="form-control">
                <ActiveLink to={'/'}><button className='text-xl font-semibold'>Home</button></ActiveLink> 
                </div>
                <div className="form-control  mx-10">
                    <ActiveLink to={'/blog'}><button className='text-xl font-semibold'>Blog</button></ActiveLink>  
                </div>
                <div className="form-control mr-5">
                        <button className='text-xl font-semibold'>Click to Pdf</button>
                </div>
  
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="" />
                            </div>
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;