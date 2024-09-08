import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './SignIn.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/profile');
            setEmail("");
            setPassword("");
            toast.success("User signed in successfully!!", {
                position: "top-center"
            });
        } catch (error) {
            toast.error("Error signing in: " + error.message, {
                position: "bottom-center"
            });
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-heading">Sign In</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="signin-input"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="signin-input"
                    placeholder='Enter the password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="signin-button">Sign In</button>
                <p onClick={handleClick} className="signin-link">Create Account?</p>
            </form>
        </div>
    );
};

export default SignIn;
