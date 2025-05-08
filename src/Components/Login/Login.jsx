import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { signInUser,googleSingin } = use(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

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


        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl border-2 border-violet-700 ">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div>
                        <Link
                            className="link link-hover"
                            to={`/forget-password?email=${encodeURIComponent(document.querySelector('input[name="email"]')?.value || '')}`}
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button className="btn btn-neutral mt-4 hover:bg-violet-700 ">Login</button>


                    <p> New to this site? <Link to="/register" className="link link-hover font-bold text-blue-400">Register</Link></p>



                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-violet-700">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Login;