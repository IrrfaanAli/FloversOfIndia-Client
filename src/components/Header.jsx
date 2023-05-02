import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-4xl font-bold">Flavors of India.</a>
                </div>
                <div className="flex-none gap-2">
                <div className="form-control">
                        <button className='text-xl font-semibold'>Home</button>
                </div>
                <div className="form-control  mx-10">
                        <button className='text-xl font-semibold'>Blog</button>
                </div>
                <div className="form-control  mx-10">
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