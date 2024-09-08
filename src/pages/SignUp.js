import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [Lname, setLName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Get the user from the credential

            if (user) {
                // Store additional user info in Firestore
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: name,
                    lastName: Lname
                });

                // Reset input fields
                setEmail("");
                setName("");
                setLName("");
                setPassword("");

                // Notify user of success
                toast.success("User registered successfully!!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            // Notify user of error
            toast.error("Error registering user: " + error.message, {
                position: "bottom-center"
            });
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-heading">Create an Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="signup-input"
                    placeholder='Enter your first name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="signup-input"
                    placeholder='Enter your last name'
                    value={Lname}
                    onChange={(e) => setLName(e.target.value)}
                />
                <input
                    type="email"
                    className="signup-input"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="signup-input"
                    placeholder='Enter the password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="signup-button">Sign Up</button>
                <p onClick={handleClick} className="signup-link">Already have an account? Sign In</p>
            </form>
        </div>
    );
};

export default SignUp;
