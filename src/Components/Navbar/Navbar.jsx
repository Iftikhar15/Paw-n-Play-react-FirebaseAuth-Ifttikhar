import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../Contexts/AuthContext';
import navLogo from '../../assets/paw logo.png'
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = use(AuthContext);
    console.log(user);
    // const userInfo= use(AuthContext);
    // console.log('userInfo in the navbar', userInfo);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('signout successfully');
                navigate("/login");
            })
            .catch(error => {
                console.log(error);

            })
    }


    const links = <>
        <li><NavLink to="/">Home</NavLink ></li>
        <li><NavLink to="/category">Category</NavLink ></li>
        <li><NavLink to="/why-us">Why Us!</NavLink ></li>

        {/* <li><NavLink to="/login">Login</NavLink ></li>
        <li><NavLink to="/register">Register</NavLink ></li> */}
        {
            user && <>
                <li><NavLink to="/packages">Packages</NavLink ></li>
                <li><NavLink to="/profile">Profile</NavLink ></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-gradient-to-b from-amber via-violet-100 to-violet-700 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-12 h-12' src={navLogo} alt="" />
                <NavLink 
                to="/"
                >
                <a className="btn btn-ghost text-xl">Paws & Play</a>
                </NavLink>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end mx-3">
                {user && (
                    <div className="relative group inline-block mr-4">
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                            src={user.photoURL || navLogo}
                            alt={user?.displayName}
                            onClick={() => navigate('/profile')}
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 p-2 bg-white dark:bg-gray-800 text-sm text-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            <p className="text-gray-900 dark:text-white font-medium">{user.displayName}</p>
                        </div>
                    </div>
                )}  
                {user ?
                    <a onClick={handleSignOut} className="btn dark:bg-gray-900 hover:bg-violet-700 cursor-pointer text-white text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-2 rounded-2xl transition duration-300">Logout</a>

                    :
                    <Link to="/login"><a onClick={handleSignOut} className="btn dark:bg-gray-900 hover:bg-violet-700 cursor-pointer text-white text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-2 rounded-2xl transition duration-300">Login</a>
                    </Link>
                }
                {!user && (
                    <Link to="/register">
                        <a
                            className="btn dark:bg-gray-900 hover:bg-violet-700 cursor-pointer text-white text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-2 rounded-2xl transition duration-300"
                        >
                            Sign Up
                        </a>
                    </Link>
                )}
            </div>

        </div>
    );
};

export default Navbar;