import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from './firebase.init';

const Header = () => {
    const[user]=useAuthState(auth)
    const navigate=useNavigate()
    const logout=()=> {
        signOut(auth);
        navigate('/login')
    }
    return (
        <div className='m-5'>
            {
                user && <>
                <Link className='p-5' to='/alldata'>ALL DATA</Link>
            <Link className='p-5' to='/adddata'>Add DATA</Link></>
            }
            <Link className='p-5' to='/register'>Register</Link>
            {
                user? <button onClick={logout} className='btn-none'>signout</button>: <Link to='/login'>Login</Link>
            }
            
        </div>
    );
};

export default Header;