import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../Contexts/AuthContext';
import navLogo from '../../assets/paw logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/login");
            })
            .catch(error => {
                console.error(error);
            });
    };



    const links = (

        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/category">Category</NavLink></li>
            <li><NavLink to="/why-us">Why Us!</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/packages">Packages</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-gradient-to-b from-amber via-violet-100 to-violet-700 shadow-sm px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 z-[1000]">
                        {links}
                    </ul>
                </div>
                <img className='w-10 h-10' src={navLogo} alt="Logo" />
                 <NavLink to="/" className="btn btn-ghost text-xl lg:hidden">P & P</NavLink>
                <NavLink to="/" className="btn btn-ghost text-xl hidden lg:block">Paws & Play</NavLink>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                {user && (
                    <div className="relative group">
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                            src={user.photoURL || navLogo}
                            alt={user?.displayName}
                            onClick={() => navigate('/profile')}
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 p-2 bg-white text-sm text-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            <p className="text-gray-900 font-medium">{user.displayName}</p>
                        </div>
                    </div>
                )}
                {user ? (
                    <button onClick={handleSignOut} className="btn bg-gray-900 hover:bg-violet-700 text-white text-sm rounded-full px-4 py-2">
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn bg-gray-900 hover:bg-violet-700 text-white text-sm rounded-full px-4 py-2">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn bg-gray-900 hover:bg-violet-700 text-white text-sm rounded-full px-4 py-2">
                                Sign Up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
