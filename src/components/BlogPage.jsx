import React, { useContext } from 'react';

import Footer from './Footer';
import Pdf from "react-to-pdf";
import ActiveLink from './ActiveLink';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom'

const ref = React.createRef();
const BlogPage = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div>
                <div className="navbar  bg-slate-300 p-5 flex-col lg:flex-row">
                    <div className=" lg:flex-1">
                        <a className="btn btn-ghost normal-case text-4xl font-bold">Flavors of India.</a>
                    </div>
                    <div className="lg:flex-none gap-2">
                        <div className="form-control">
                            <ActiveLink to={'/'}><button className='text-xl font-semibold'>Home</button></ActiveLink>
                        </div>
                        <div className="form-control  mx-10">
                            <ActiveLink to={'/blog'}><button className='text-xl font-semibold'>Blog</button></ActiveLink>
                        </div>
                        <button></button>
                        <div className="form-control mr-5">
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className='text-xl text-black text-semibold'>Generate Pdf</button>}
                            </Pdf>
                        </div>

                        <div>
                            {user ? <div className='flex gap-2'> <div> <img className='rounded-full w-12 h-12 ' src={user.photoURL} alt="" />
                            </div><button onClick={handleLogOut} className='bg-orange-500 text-white p-2 rounded'>LogOut</button></div> :
                                <Link to={'/login'}><button className='bg-orange-500 text-white p-2 rounded'>LogIn</button></Link>}
                        </div>
                    </div>
                </div>
            </div>

            <div ref={ref}>
                <p className='text-2xl font-semibold'> Differences between uncontrolled and controlled components.</p>
                <p>Definition: Controlled components are managed by their parent component, while uncontrolled components manage their own state internally. <br></br>
                    State management: Controlled components receive state and methods as props from their parent, while uncontrolled components manage their own state internally. <br></br>
                    Data flow: Data flows top-down from the parent to the child component in controlled components, while uncontrolled components have more autonomy and can update their own state independently. <br></br>
                    Accessibility: Controlled components are often more accessible, as the parent has full control over the component's state, while uncontrolled components can be more difficult to manage in terms of accessibility.</p>

                <p className='text-2xl font-semibold'>How to validate React props using PropTypes?</p>
                <p>
                    Install PropTypes (included in React) <br></br>
                    Import PropTypes at the top of your component file using import PropTypes from 'prop-types';<br></br>
                    Define the PropTypes using a PropTypes object below your component's definition, specifying the expected data types for each prop. Use isRequired to mark a prop as mandatory.<br></br>
                    Check the console for any warnings or errors related to prop type mismatches.
                </p>

                <p className='text-2xl font-semibold'>Difference between nodejs and express js?</p>
                <p>
                    while Node.js provides a platform for executing JavaScript outside of the browser, Express.js provides a set of tools and features for building web applications on top of Node.js. Express.js simplifies web application development by providing abstractions for common tasks, while Node.js provides the underlying runtime and system-level capabilities that Express.js builds upon.
                </p>
                <p className='text-2xl font-semibold'>What is a custom hook, and why will you create a custom hook?</p>
                <p>
                a custom hook is a reusable function that encapsulates commonly used logic and can be shared across multiple components. You would create a custom hook to avoid repeating the same code and to improve the reusability and maintainability of your code.
                   </p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default BlogPage; 