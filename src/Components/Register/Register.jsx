import React, { use, useState } from 'react';
import { Link } from 'react-router-dom'; // FIXED
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // CORRECT
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

    const { CreateUser } = use(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const PhotoURL = e.target.PhotoURL.value;
        const confirmpassword = e.target.confirmpassword.value;

        if (password.length < 6) {
            alert("Password must be equal or greater than 6 digit");
            return;
        }

        if (password !== confirmpassword) {
            alert("Password and Confirm password must be equal");
            return;
        }

        if (!/[a-z]/.test(password)) {
            alert("Password must contain at least one lower case letter");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one Uper case letter");
            return;
        }

        console.log(displayName, email, password, confirmpassword);

        CreateUser(email, password, PhotoURL, displayName, confirmpassword)
            .then(result => {
                console.log(result);
                navigate("/"); // Redirect to home
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl border-2 border-violet-700">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">PhotoURL</label>
                    <input type="text" name='PhotoURL' className="input" placeholder="PhotoURL" />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <button onClick={()=>{setShowPassword(!showPassword)}} className="btn btn-xs absolute mt-4">
                            {
                                showPassword?<FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                        <input type={showPassword? 'text':'passowrd'} name='password' className="input" placeholder="Password" />
                    </div>

                    <label className="label">Confirm Password</label>
                    <input type="password" name='confirmpassword' className="input" placeholder="Confirm Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 dark:bg-gray-900 hover:bg-violet-700 ">Sign Up</button>
                    <p> Already have an account? <Link to="/login" className="link link-hover font-bold text-cyan-500">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
