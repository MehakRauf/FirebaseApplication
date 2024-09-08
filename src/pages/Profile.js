import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDoc = doc(db, "Users", user.uid);
                const docSnap = await getDoc(userDoc);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } else {
                navigate('/signin'); // Redirect to sign-in if not authenticated
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <div className="profile-container">
            {userData ? (
                <div className="profile-content">
                    <h2 className="profile-heading">Welcome, {userData.firstName}!</h2>
                    <div className="profile-details">
                        <p><strong>First Name:</strong> {userData.firstName}</p>
                        <p><strong>Last Name:</strong> {userData.lastName}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                </div>
            ) : (
                <p className="loading-text">Loading...</p>
            )}
        </div>
    );
};

export default Profile;
