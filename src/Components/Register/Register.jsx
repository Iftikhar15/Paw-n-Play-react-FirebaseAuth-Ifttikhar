import React, { use, useState } from 'react';
import { Link } from 'react-router-dom'; // FIXED
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // CORRECT
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

    const { CreateUser,googleSingin } = use(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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


    const handleGoogleLogin = () =>{
        googleSingin()
        .then(result=> {
            console.log(result.user);
            
        })
        .catch(error =>{
            console.log(error);
            
        })

    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl border-2 border-violet-700">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input  w-full  pr-12" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input  w-full  pr-12" placeholder="Email" />
                    <label className="label">PhotoURL</label>
                    <input type="text" name='PhotoURL' className="input w-full  pr-12" placeholder="PhotoURL" />
                    <label className="label">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="input w-full"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                        </button>
                        </div>

                    <label className="label">Confirm Password</label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmpassword"
                            className="input w-full"
                            placeholder="Confirm Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            aria-label="Toggle confirm password visibility"
                        >
                            {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
                        </button>
                        </div>
                    <button className="btn btn-neutral mt-4 dark:bg-gray-900 hover:bg-violet-700 ">Sign Up</button>
                    <p> Already have an account? <Link to="/login" className="link link-hover font-bold text-cyan-500">Login</Link></p>

                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-violet-700">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
