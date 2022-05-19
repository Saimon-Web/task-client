import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';


import auth from './page/firebase.init';
import Loading from './page/Loading';
const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    if (loading) {
        return <Loading></Loading>
    }
    // console.log(user.displayName)
    if (user) {
        navigate('/alldata')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        event.target.reset();
    }


    return (
        <div className='form-box mx-auto'>
            <h1 className='text-danger text-center fs-3 fw-bold mt-5 '>REGISTER YOUR ACCOUNT</h1>
            <div className='line w-50 text-center mx-auto bg-danger mb-5'></div>
            <form action="" className='form-info ' onSubmit={handleRegister}>
                <label for="html">Your Name</label> <br />
                <input type="text" name="name" placeholder='Your Name' id="" />
                <label for="html">Email Address</label> <br />
                <input type="email" name="email" placeholder='Email' id="" /> <br />
                <label for="html">Password</label> <br />
                <input type="password" name="password" placeholder='password' id="" /> <br />
                <input className='button ' type="submit" value="Register" />
            </form>

         
            <p className='text-danger'>{error?.message || error1?.message} </p>


        </div>
    );
};

export default Register;