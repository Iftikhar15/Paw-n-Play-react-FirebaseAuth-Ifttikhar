import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";


const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null);
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // onAuthStateChanged (auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('has logged in', currentUser);
    //     }
    //     else {
    //         console.log('current user', currentUser);
    //     }
    // })



    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside useeffect on auth state change', currentUser);
            setUser(currentUser);
            
        })
        return () =>{
            unSubscribe();
        }
    },[])


    const userInfo = {
        user,
        CreateUser,
        signInUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;