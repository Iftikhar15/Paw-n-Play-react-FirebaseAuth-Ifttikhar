import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../Contexts/AuthContext';
import navLogo from '../../assets/paw logo.png'


const Navbar = () => {

    const { user } = use(AuthContext);
    console.log(user);
    // const userInfo= use(AuthContext);
    // console.log('userInfo in the navbar', userInfo);



    const links = <>
        <li><NavLink to="/">Home</NavLink ></li>
        <li><NavLink to="/category">Category</NavLink ></li>
        <li><NavLink to="/why-us">Why Us!</NavLink ></li>
        <li><NavLink to="/packages">Packages</NavLink ></li>
        <li><NavLink to="/login">Login</NavLink ></li>
        <li><NavLink to="/register">Register</NavLink ></li>

    </>

    return (
        <div className="navbar bg-gradient-to-t from-amber via-violet-100 to-violet-500 shadow-sm">
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
                <a className="btn btn-ghost text-xl">Paws & Play</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            

            <div className="navbar-end">
                <button className="bg-gray-700 hover:bg-violet-700 cursor-pointer text-white text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-2 rounded-2xl transition duration-300">
                    {user ? <a className="btn">Sign Out</a> : <Link to="/login"> Login</Link>}
                </button>
            </div>

        </div>
    );
};

export default Navbar;