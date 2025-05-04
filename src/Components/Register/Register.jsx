// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {

    const {CreateUser} = use(AuthContext);
    

    const handleRegister = e => {
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;

       console.log(name, email, password);

    //    create user
    // createUserWithEmailAndPassword(auth, email, password)
    // .then(result=>{
    //     console.log(result);
    // })
    // .catch(error =>{
    //     console.log(error);
        
    // })
       
        CreateUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                    <p> Already have an account? <Link to="/login" className="link link-hover font-bold text-green-400">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;