import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("your two password didn't match");
            return;
        }
        if (password.length < 6) {
            setError('password can be 6 caracter or more');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    // const handleFormSubmit = event => {
    //     setEmail(event.target.value)

    // }

    return (
        <div className='form-container'>
            <form onSubmit={handleCreateUser}>
                <div>
                    <h2 className='form-title'>SignUp</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>
                    <input className='form-submit' type="submit" value='SignUp' />
                </div>
                <h2 style={{ color: 'red' }}>{error}</h2>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>LogIn</Link>
                </p>

            </form>

        </div >
    );
};

export default Signup;